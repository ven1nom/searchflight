const express=require('express')
const app=express();
// require('dotenv').config()
// console.log(process.env)
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const CityRepository = require('./repositories/city-repo');
// const {City}=require('./models/index')
const ApiRoutes=require('./routes/index')
 const setupAndStartServer=async ()=>{
// const PORT=3000;
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended:true}));
  app.use('/api', ApiRoutes)// applies to all upcoming request all routes

  app.listen(PORT,async ()=>{
    console.log(`Server started at ${PORT}`)
    // await City.create({
    //   name:"New Delhi"
      // this will create a row inside city table name: New Delhi
    // })

    //OR
    const repo=new CityRepository();
    repo.createCity({name:"New Delhi"})
})
}

setupAndStartServer();
