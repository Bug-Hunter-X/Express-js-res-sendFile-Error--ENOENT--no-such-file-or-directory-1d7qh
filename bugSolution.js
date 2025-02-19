const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const filePath = '/path/to/file.html';
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      res.status(404).send('File not found');
    } else {
      res.sendFile(filePath);
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});