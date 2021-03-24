const express = require('express')
const { MongoClient } = require('mongodb');
require('dotenv').config()

const app = express()

const uri = process.env.URI;
const func = async ()=>{
    const client = new MongoClient(uri)
    try{
        await client.connect();
        const db = client.db("sample_analytics")
        console.log(db.databaseName);

        const collection = db.collection("accounts");
        const chuspal = await collection.find({"account_id": 351063})
        const c = await chuspal.toArray()
        console.table(c);

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