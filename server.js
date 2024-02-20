import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors module

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());

// Use cors middleware with options to allow requests from localhost:5173
app.use(cors({
  origin: 'http://localhost:5176',
}));

// Define options route for the contact form to enable preflight requests
app.options('/api/contact', cors());

// Your contact form route
app.post('/api/contact', cors(), (req, res) => {
  console.log('Received request from origin:', req.get('origin'));
  const formData = req.body;
  console.log('Received form data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
