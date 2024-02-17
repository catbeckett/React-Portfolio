// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Your contact form route
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  // Handle the form data here (e.g., save to a database, send an email)
  console.log('Received form data:', formData);
  res.json({ message: 'Form submitted successfully!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
