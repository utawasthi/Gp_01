require('dotenv').config();
const mongoose = require('mongoose');

const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MongoDBuri);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.log("MongoDB connection failed !!!" , error);
    }
}

module.exports = connectToDB; 