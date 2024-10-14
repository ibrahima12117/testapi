const express = require('express');
const app = express();
const port = 5000;
const Object = require('./Routes/categoryRoutes');
const Object2 = require('./Routes/productRoutes');

require('dotenv').config({ path: './config/.env' })
require('./database/dbconnedcted')



app.get('/', (req, res) => {
  res.send('Welcome to the API');
})




app.post('/api', Object, (req, res) => {
  res.send('Object found');
})
app.post('/api', Object2, (req, res) => {
  res.send('Object found');
  })




app.listen(port, function () {
  console.log(` Sever is runing on port ${port}`);
})
