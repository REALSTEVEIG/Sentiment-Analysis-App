import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

export const analyzeSentiment = async (text: string): Promise<number> => {
    try {
      const response = await axios.post(
        `${process.env.HUGGINGFACE_URL}`,
        { inputs: text },
        { headers: { Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}` } }
      );
    
      const result = response.data[0][0];
      return result.label === 'POSITIVE' ? 1 : 0;
    } catch (error) {
  
      const positiveWords = ['amazing', 'great', 'happy', 'fantastic', 'awesome'];
      const negativeWords = ['bad', 'terrible', 'sad', 'horrible', 'awful'];
  
      let positiveCount = 0;
      let negativeCount = 0;
  
      const words = text.toLowerCase().split(' ');
  
      for (const word of words) {
        if (positiveWords.includes(word)) {
          positiveCount++;
        } else if (negativeWords.includes(word)) {
          negativeCount++;
        }
      }
  
      if (positiveCount > negativeCount) return 1;
      if (negativeCount > positiveCount) return 0;
  
      return 0.5;
    }
  };
  