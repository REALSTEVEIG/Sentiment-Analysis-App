"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResults = exports.saveResult = void 0;
const analysisResults = [];
const saveResult = (result) => {
    analysisResults.push(result);
};
exports.saveResult = saveResult;
const getResults = () => {
    return analysisResults;
};
exports.getResults = getResults;
