export type AnalysisResult = {
    text: string;
    score: number;
    timestamp: string;
  };
  // in memory storage
  const analysisResults: AnalysisResult[] = [];
  
  export const saveResult = (result: AnalysisResult): void => {
    analysisResults.push(result);
  };
  
  export const getResults = (): AnalysisResult[] => {
    return analysisResults;
  };
  