const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const todos = require('./routes/todos')
app.use(express.static(path.join(__dirname, 'client/build')))

mongoose.connect('mongodb://localhost/todos-project')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Could not connect to MongoDB...'))



app.use(express.json());

// TODOS requests
app.use('/api/todos', todos);

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'))
})

const port = process.env.PORT || 5000

app.listen(port)
console.log(`App is listening on port ${port}`)
