# **Sentiment Analysis App**

## **Overview**
The Sentiment Analysis App is a backend service that processes text input, performs sentiment analysis, and stores the results in an in-memory cache. The application provides two endpoints:
- `POST /analyze`: Analyze the sentiment of a given text input.
- `GET /results`: Retrieve all previously analyzed sentiment results.

A **Swagger documentation** is available for testing and reference, accessible at:
[http://localhost:3000/api-docs](http://localhost:3000/api-docs).

---

## **Setup Instructions**

### **1. Prerequisites**
- Ensure you have **Node.js** (v16 or later) installed.
- Install **npm** (comes bundled with Node.js).

### **2. Installation**
1. Clone the repository:
   ```bash
   git https://github.com/REALSTEVEIG/Sentiment-Analysis-App
   cd Sentiment-Analysis-App
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Hugging Face API key:
   ```
   NODE_ENV=development

   ```

### **3. Run the Application**
- Start the server in development mode:
  ```bash
  npm run dev
  ```
- Or, start the server in production mode:
  ```bash
  npm start
  ```
- Or, build a local docker image and start the image using this command:
  ```bash
  docker build -t sentiment-app . && docker run -d --name sentiment-app -p 3000:3000 sentiment-app
  ```
- To run the test:
  ```bash
  npm test
  ```

The app will be available at: [http://localhost:3000](http://localhost:3000).

---

## **API Endpoints**

### **1. POST /api/analyze**
Analyze the sentiment of a given text.

#### **Request**
- **URL**: `/api/analyze`
- **Method**: `POST`
- **Request Body**:
  ```json
  {
    "text": "This is amazing!"
  }
  ```

#### **Response**
- **Status 201**:
  ```json
  {
    "text": "This is amazing!",
    "score": 1,
    "timestamp": "2025-01-13T18:46:27.000Z"
  }
  ```
- **Status 400**: Invalid input (e.g., missing `text` field or invalid format).
- **Status 500**: Error during analysis.

---

### **2. GET /api/results**
Retrieve all past sentiment analysis results.

#### **Request**
- **URL**: `/api/results`
- **Method**: `GET`

#### **Response**
- **Status 200**:
  ```json
  [
    {
      "text": "This is amazing!",
      "score": 1,
      "timestamp": "2025-01-13T18:46:27.000Z"
    },
    {
      "text": "This is bad!",
      "score": 0,
      "timestamp": "2025-01-13T18:50:30.000Z"
    }
  ]
  ```
- **Status 500**: Error retrieving results.

---

## **Key Features**
1. **Swagger Documentation**:
   - Interactive API documentation is available at: [http://localhost:3000/api-docs](http://localhost:3000/api-docs).

2. **In-Memory Storage**:
   - Sentiment analysis results are stored in memory for simplicity.

3. **Fallback Sentiment Logic**:
   - If the Hugging Face API fails, a fallback logic uses predefined positive and negative words to calculate sentiment scores.

---

## **Technologies Used**
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **Swagger**: API documentation.
- **Axios**: For making external API requests.
- **dotenv**: Environment variable management.

---

## **Testing the Application**
Unit tests can be added using **Jest** or **Supertest** for thorough coverage. To run tests:
```bash
npm test
```

---

## **Project Structure**
```plaintext
dist/
src/
├── controllers/
│   └── sentimentController.ts   # API endpoint logic
├── services/
│   └── sentimentService.ts      # Sentiment analysis logic
├── storage/
│   └── resultStore.ts           # In-memory storage
├── routes/
│   └── sentimentRoute.ts        # API route definitions
├── swagger.ts                   # Swagger setup
├── app.ts                       # Main application entry point
├── tests/                       # Unit and integration tests
└── .env                         # Environment variables (Hugging Face API key)
├─ Dockerfile                    # Dockerfile
├─ package-lock.json             
├─ package.json                      
├─ README.md                      
└─ tsconfig.json 

Demo Link: `https://www.loom.com/share/38b8fd0050d546f7b75291202afc5280?sid=032ed764-04dd-4e81-b06a-832bcaa6f08e`
```
