const express = require('express')
const app = express()
const port = 3000;

const authRoutes = require('./routes/authRoutes');

const connectToDB = require('./DB/db');

connectToDB();

app.use(express.json());


app.use('/api' , authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});