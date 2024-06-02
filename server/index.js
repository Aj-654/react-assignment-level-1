const express = require('express');

const app = express();
const port = 3001;
const cors = require('cors')
app.use(express.json());
app.use(cors());

app.get('/users', async (req, res) => {
  try {
    const fetch = await import('node-fetch');
    const response = await fetch.default('https://d2k-static-assets.s3.ap-south-1.amazonaws.com/assignment-files/python-backend-assignment/users.json');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
