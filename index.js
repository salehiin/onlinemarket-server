const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

console.log(process.env.DB_PASS)

  

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hrbkxoj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Brought from readme.md
    // const productCollection = client.db('onlineMarket').collection('products');

    // app.get('/products', async(req, res) => {
    //     console.log(req.query);

    //     const result = await productCollection.find().toArray();
    //     res.send(result);
    // })

    // edit by watching video
    // app.get('/totalProducts', async(req, res) =>{
    //     const result = await productCollection.estimatedDocumentCount();
    //     res.send({totalProducts: result})
    // })

    // edit by watching video
    // app.post('/productsByIds', async(req, res) =>{
    //   const ids = req.body;
    //   const objectIds = ids.map(id => new ObjectId(id));
    //   const query = {_id: {$in:objectIds}}
    //   console.log(ids);
    //   const result = await productCollection.find(query).toArray();
    //   res.send(result);
    // })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);



app.get('/', (req, res) =>{
    res.send('We are busy shopping')
})

app.listen(port, () =>{
    console.log(`Online market is running on port: ${port}`);
})
