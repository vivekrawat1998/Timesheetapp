const mongoose = require("mongoose");
const username ="vivekrwt";
const password = "vivekrwt@#123";
const clusterName= "cluster0";

const mongoDB_URL = `mongodb+srv://${encodeURIComponent(username)}:${encodeURIComponent(password)}@${clusterName}.i5clcl0.mongodb.net`;



const connectDb = async () =>{
    await mongoose.connect(mongoDB_URL, )
    console.log(`connected to the database`)

}


module.exports = connectDb;