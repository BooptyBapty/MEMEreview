const express = require('express')
// const { MongoClient } = require('mongodb');
const mongo = require('mongodb');
const monk = require('monk')
require('dotenv').config()

const app = express()

const uri = process.env.URI;

const add = async ()=>{
    try{
        const db = await monk(uri);
        const collection = db.get('phucc')
        await collection.insert([{a: 1}, {a: 2}, {a: 3}]);
    } catch(err){
        console.log(err);
    } finally{
        db.close();
    }
}

add()

// const func = async ()=>{
//     const client = new MongoClient(uri)
//     try{
//         await client.connect();
//     }catch(err){
//         console.log(err);
//     }finally{
//         client.close();
//     }
// }
// func();

app.get('/', (req, res)=>{
    res.send('henlo')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})