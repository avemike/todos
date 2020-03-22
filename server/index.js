const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const todos = require('./routes/todos')
const port = process.env.PORT || 5000;
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const categories = require('./routes/categories')

// app.use(express.static(path.join(__dirname, 'client/build')))
app.use(express.static(DIST_DIR)); // NEW

mongoose.connect('mongodb://localhost/todos-project')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.log('Could not connect to MongoDB...'))



app.use(express.json())
app.use(cors())
// TODOS requests
app.use('/api/todos', todos)
// CATEGORIES requests
app.use('/api/categories', categories)

app.get('/', (req, res) => {
  res.sendFile(HTML_FILE); // EDIT
 });

// app.get('*', (req,res) => {
//   res.sendFile(path.join(__dirname, 'client/build/index.html'))
// })

// const port = process.env.PORT || 5000

app.listen(port)
console.log(`App is listening on port ${port}`)
