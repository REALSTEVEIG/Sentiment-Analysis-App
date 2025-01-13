import * as dotenv from "dotenv";
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import sentimentRoutes from './routes/sentimentRoute';
import { swaggerUi, swaggerDocs } from './swagger';

dotenv.config();

const app: Application = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use('/api', sentimentRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});

export default app;
