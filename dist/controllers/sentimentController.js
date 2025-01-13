"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnalysisResults = exports.analyzeText = void 0;
const sentimentService_1 = require("../services/sentimentService");
const resultStore_1 = require("../storage/resultStore");
const analyzeText = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { text } = req.body;
    if (!text || typeof text !== 'string') {
        res.status(400).json({ error: "Invalid input. 'text' is required and must be a string." });
    }
    try {
        const sentimentScore = yield (0, sentimentService_1.analyzeSentiment)(text);
        const timestamp = new Date().toISOString();
        const result = { text, score: sentimentScore, timestamp };
        (0, resultStore_1.saveResult)(result);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(500).json({ error: 'Error analyzing sentiment.' });
    }
});
exports.analyzeText = analyzeText;
const getAnalysisResults = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = (0, resultStore_1.getResults)();
        res.status(200).json(results);
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.getAnalysisResults = getAnalysisResults;
