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

app.use(express.static(path.join(__dirname, 'public'), {
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.jsx')) {
      res.set('Content-Type', 'application/javascript');
    }
  },
}));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
