import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());

// Use cors middleware with options to allow requests from localhost:5173
app.use(cors({
  origin: 'http://localhost:5173',
}));

// Your contact form route
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Handle the form data here
  console.log('Received form data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
