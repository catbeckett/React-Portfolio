import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors module
import path from 'path'; // Import the path module

const app = express();
const PORT = process.env.PORT || 3000; // Use the environment port or default to 3000

app.use(express.json());
app.use(bodyParser.json());

// Allow requests from any origin
app.use(cors());

// Define options route for the contact form to enable preflight requests
app.options('/api/contact', cors());

// Your contact form route
app.post('/api/contact', cors(), (req, res) => {
  console.log('Received request from origin:', req.get('origin'));
  const formData = req.body;
  console.log('Received form data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

// Serve the static files
app.use(express.static(path.join(__dirname, 'public')));

// Other middleware and route definitions...

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
