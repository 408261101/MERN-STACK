require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const menuRoutes = require('./routes/menu')
const PORT = 4000;

//express app
const app = express()

// middleware
app.use(express.json())

// routes
app.use('/api/menu', menuRoutes)

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

  




