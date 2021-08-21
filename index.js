const express = require('express');
const app = express();
const port = 3131;

app.get('/', (req, res) => {
  debugger;
  res.send('Hello, Welcome to the Express starter template for Stackblitz!');
});

app.listen(port, () => {
  console.log(`App is live at http://localhost:${port}`);
});
