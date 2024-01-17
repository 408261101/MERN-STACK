require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const menuRoutes = require('./routes/menu')
const path = require('path');
const PORT = 4000;

//express app
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/menu', menuRoutes)

// 提供靜態檔案
app.use(express.static(path.join(__dirname, '../frontend/build')));

// 將所有非 API 路徑指向 React 應用
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

//connect to mongodb
mongoose.connect(process.env.DB_URI)
.then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log('listening for requests on port', PORT)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 

  




