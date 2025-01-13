import { Request, Response } from 'express';
import { analyzeSentiment } from '../services/sentimentService';
import { saveResult, getResults } from '../storage/resultStore';

export const analyzeText = async (req: Request, res: Response): Promise<void> => {
  const { text } = req.body;

  if (!text || typeof text !== 'string') {
    res.status(400).json({ error: "Invalid input. 'text' is required and must be a string." });
  }

  try {
    const sentimentScore = await analyzeSentiment(text);
    const timestamp = new Date().toISOString();
    const result = { text, score: sentimentScore, timestamp };

    saveResult(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: 'Error analyzing sentiment.' });
  }
};

export const getAnalysisResults = async (req: Request, res: Response): Promise<void> => {
    try {
      const results = getResults();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error });
    }
  };