const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express()

const uri = process.env.URI;

const func = async ()=>{
    const client = new MongoClient(uri,{useUnifiedTopology: true})
    try{
        client.connect().then(()=>{console.log('connected')})
    }catch(err){
        console.log(err);
    }finally{
        client.close();
    }
}
func();

app.get('/', (req, res)=>{
    res.send('henlo')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})