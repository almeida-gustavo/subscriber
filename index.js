require('dotenv/config');
const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).send('Hello subscriber');
});

app.listen(process.env.PORT, () => {
  console.log(`Application runing on port ${process.env.PORT}`);
});
