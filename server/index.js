const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'public/index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`ready for trivia on port ${PORT}`));
