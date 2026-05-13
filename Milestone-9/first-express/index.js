const express = require('express')
var cors = require('cors')
const app = express()
const port = process.env.PORT || 8000;

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors(),express.json())
// app.use
const users = [
  {
    id: 1,
    name: "Rakib",
    email: "rakib@example.com"
  },
  {
    id: 2,
    name: "Sakib",
    email: "sakib@example.com"
  },
  {
    id: 3,
    name: "Rahim",
    email: "rahim@example.com"
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
app.post('/profile',(req,res) => {
  // console.log(req.body,"Post method is working");
  const newUser = req.body;
  // console.log(newUser)
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send({success:true,data:newUser, massage:"Post method is working"})
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
