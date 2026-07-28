const { MongoClient } = require('mongodb');
require('dotenv').config()
const express = require('express');
const app = express()
const port = 3000
const data = [
    {
        name:"romman",
        roll:343455
    },
    {
        name:"loman",
        roll:343434
    }
]

app.get('/', (req, res) => {
    res.send("Hello world ")

})



const client = new MongoClient(process.env.DB_URI);
async function connectToMongoDB() {
  try {
    await client.connect();
    // console.log("You successfully connected to MongoDB!");
    const db = client.db("e-commerce");
    const productsCollections = db.collection("products")
    // return client;
  } catch (err) {
    console.dir(err);
  }
}

// Call this only when your application terminates
// export async function disconnectFromMongoDB() {
//   await client.close();
// }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})