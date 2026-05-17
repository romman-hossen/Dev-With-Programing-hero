const express = require('express')
const app  = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5001;

app.use(cors(),express.json());

// const uri = process.env.MONGODB_URI;
// MONGODB_URI = mongodb+srv://<db_username>:<db_password>@cluster0.rsp6gjh.mongodb.net/?appName=Cluster0
// mongo-URI = SimpleCrudUser
// mongo-pass = VaI7wiDZLAV1OJoj
const uri = `mongodb+srv://SimpleCrudUser:VaI7wiDZLAV1OJoj@cluster0.rsp6gjh.mongodb.net/?appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const run =async () =>{
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
     const db = client.db("SimpleCrud");
    const userCollection = db.collection("Users");

    app.get('/users',async(req,res) =>{
      const cursor = userCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })
    app.get('/users/:id',async(req,res) => {
      const id = req.params.id;
      const query = {
        _id: new ObjectId(id)
      }
      const user = await userCollection.findOne(query)
      console.log('req',id)
      res.send(user)     
    })
    app.delete('/users/:id',async(req,res) => {
       const id = req.params.id;
        const query = {
        _id: new ObjectId(id)
      }
      const result = await userCollection.deleteOne(query);
      res.send(result)
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();  
  }

}
run().catch(console.dir);

app.get('/',(req,res) => {
    res.send("Hello world")
})
app.listen(port, () => {
    console.log(`Express success done ${port}`)
})