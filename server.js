import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/api/contact', (req, res) => {
  try {
    // Handle CORS preflight request
    if (req.method === 'OPTIONS') {
      res.sendStatus(200);
      return;
    }

    // Simulate a delay (for testing purposes)
    setTimeout(() => {
      // Respond with success message and status code 200
      res.status(200).json({ message: 'Form submitted successfully!' });
    }, 1000); // 1 second delay
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Serve JavaScript files with the correct MIME type
app.use(express.static(path.join(__dirname, 'dist'), {
  setHeaders: (res, filePath) => {
    const extname = path.extname(filePath);
    if (extname === '.js' || extname === '.jsx') {
      res.set('Content-Type', 'application/javascript');
    }
  },
}));

// This route serves your React frontend
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
