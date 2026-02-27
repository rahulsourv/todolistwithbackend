const mongoose= require("mongoose");

const connectDB= async () =>{
    try{
    await mongoose.connect(process.env.MONGO_URI);
     console.log("MONGODB CONNECTED SUCESSFULL");
}
catch(error){
    console.log("Error detected:", error.message);
   
}
};

module.exports= connectDB;