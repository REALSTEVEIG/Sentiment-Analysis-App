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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.analyzeSentiment = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const axios_1 = __importDefault(require("axios"));
dotenv_1.default.config();
const analyzeSentiment = (text) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.post(`${process.env.HUGGINGFACE_URL}`, { inputs: text }, { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } });
        const result = response.data[0][0];
        return result.label === 'POSITIVE' ? 1 : 0;
    }
    catch (error) {
        const positiveWords = ['amazing', 'great', 'happy', 'fantastic', 'awesome'];
        const negativeWords = ['bad', 'terrible', 'sad', 'horrible', 'awful'];
        let positiveCount = 0;
        let negativeCount = 0;
        const words = text.toLowerCase().split(' ');
        for (const word of words) {
            if (positiveWords.includes(word)) {
                positiveCount++;
            }
            else if (negativeWords.includes(word)) {
                negativeCount++;
            }
        }
        if (positiveCount > negativeCount)
            return 1;
        if (negativeCount > positiveCount)
            return 0;
        return 0.5;
    }
});
exports.analyzeSentiment = analyzeSentiment;
