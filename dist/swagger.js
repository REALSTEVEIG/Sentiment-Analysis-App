"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDocs = exports.swaggerUi = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
exports.swaggerUi = swagger_ui_express_1.default;
dotenv_1.default.config();
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
const swaggerDocs = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerDocs = swaggerDocs;
