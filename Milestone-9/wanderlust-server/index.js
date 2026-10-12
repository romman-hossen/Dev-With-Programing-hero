const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb'); 
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000; 
require('dotenv').config();
app.use(cors());
app.use(express.json());



// Replace the placeholder with your Atlas connection string
// const uri = "mongodb+srv://wanderlust:wvBkEkzK2De5qEC4@cluster0.rsp6gjh.mongodb.net/?appName=Cluster0";
const uri = process.env.MONGO_URI;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
 async function runStableAPIConnect() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    const db = client.db('wanderlust');
    const destinationsCollection = db.collection('destinations');
     
    app.post('/destination', async (req, res) => {
        const destination = req.body;
        console.log(destination);
        const result = await destinationsCollection.insertOne(destination);
        res.send(result);
    });
    app.get('/destination', async (req, res) => {
      const cursor = destinationsCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });
    app.get('/destination/:id',async (req,res) => {
      const id = req.params.id;
      console.log('getting specific destination', id);
      const query = {_id: new ObjectId(id)};
      const destination = await destinationsCollection.findOne(query);
      res.send(destination);
      
    })
    // app.patch('/destination/:id', async (req, res) => {
    //   const id = req.params.id;
    //   const updatedDestination = req.body;  
      
    // })
    app.patch('/destination/:id', async(req,res) => {
      const id = req.params.id;
      const updatedData = req.body;
      const result =await destinationsCollection.updateOne(
        {_id: new ObjectId(id)},
        {$set: updatedData}
      )
     res.json(result)  
    })
    app.delete('/destination/:id', async(req,res) => {
      const {id} = req.params;
      const result = await destinationsCollection.deleteOne({_id: new ObjectId(id)});
      console.log(result, "this is result")
      res.json(result)
    })
    

    // app.get('/', (req, res) => {
    //     res.send('Wanderlust server is running');
    // });

    // Send a ping to confirm a successful connection
    const result = await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
    // return result;
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
runStableAPIConnect().catch(console.dir);

app.listen(port, () => {
    console.log(`Wanderlust server is running on port: ${port}`);
})