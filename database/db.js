const mongoose=require("mongoose");

var mongoURL="mongodb+srv://uetiansheeza:Sheeza*12@media-msgs.5vk59kf.mongodb.net/"

mongoose.connect(mongoURL, {useUnifiedTopology:true, useNewUrlParser:true})

var connect=mongoose.connection

connect.on("error" , ()=>{
    console.log("MongoDb Connection failed")
})
connect.on("connected" , ()=>{
    console.log("MongoDb Connected")
});
module.exports=mongoose;