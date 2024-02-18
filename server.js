import express from 'express'; // Use 'import' instead of 'require'

const app = express();
const PORT = 3000; // Define the port number

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
