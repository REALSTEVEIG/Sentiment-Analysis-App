import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const isDevelopment = process.env.NODE_ENV !== 'production';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sentiment Analysis API',
      version: '1.0.0',
      description: 'API for analyzing text sentiment',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
  },
  apis: [isDevelopment ? './src/routes/sentimentRoute.ts' : './dist/routes/sentimentRoute.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export { swaggerUi, swaggerDocs };
