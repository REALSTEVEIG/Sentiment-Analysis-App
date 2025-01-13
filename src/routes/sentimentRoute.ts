import express, { Router } from 'express';
import { analyzeText, getAnalysisResults } from '../controllers/sentimentController';

const router: Router = express.Router();

router.post('/analyze', analyzeText);
router.get('/results', getAnalysisResults);

export default router;

/**
 * @swagger
 * /analyze:
 *   post:
 *     summary: Analyze text sentiment
 *     description: Accepts a JSON payload with text input and returns the sentiment analysis result.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               text:
 *                 type: string
 *                 example: "This is amazing!"
 *     responses:
 *       201:
 *         description: Sentiment analysis result
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 text:
 *                   type: string
 *                 score:
 *                   type: number
 *                 timestamp:
 *                   type: string
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Error analyzing sentiment
 *
 * /results:
 *   get:
 *     summary: Get all sentiment analysis results
 *     description: Retrieves all past sentiment analysis results.
 *     responses:
 *       200:
 *         description: List of sentiment analysis results
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   text:
 *                     type: string
 *                   score:
 *                     type: number
 *                   timestamp:
 *                     type: string
 *       500:
 *         description: Error retrieving results
 */
