const express=require('express')
const app=express();
// require('dotenv').config()
// console.log(process.env)
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');

const setupAndStartServer=async ()=>{
// const PORT=3000;
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}))
  app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})
}

setupAndStartServer();
