const express = require('express')
const app = express()
const port = process.env.PORT || 8000;
const users = [
  {
    id: 1,
    name: "Rakib",
    age: 22
  },
  {
    id: 2,
    name: "Sakib",
    age: 25
  },
  {
    id: 3,
    name: "Rahim",
    age: 20
  }
];

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello World from about page!')
})
app.get('/profile', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
