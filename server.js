// Server Setup
const express = require('express')
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(cors())
const port = 3000; // http:/localhost:3000/


app.get('/',  (req, res) => {
  res.send("Welcome to the Server!")
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
});