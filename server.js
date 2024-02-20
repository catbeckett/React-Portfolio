import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.options('/api/contact', cors());

app.post('/api/contact', cors(), (req, res) => {
  console.log('Received request from origin:', req.get('origin'));
  const formData = req.body;
  console.log('Received form data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

// Serve JavaScript files with the correct MIME type
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (req.originalUrl.endsWith('.jsx')) {
    res.set('Content-Type', 'application/javascript');
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
