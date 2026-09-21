const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

require('dotenv').config();

app.get('/', (req, res) => {
  res.json({ message: 'Server is running!' });
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.post('/echo', (req, res) => {
  res.json({ you_sent: req.body });
});