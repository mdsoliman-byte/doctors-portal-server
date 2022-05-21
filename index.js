const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(cors());
// DB Connection 
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.3j4fp.mongodb.net/?retryWrites=true&w=majority`;

// App Listining Port Veriable 
app.listen(port, () => {
    console.log(`Doctore App Listining is ${port}`)
})