const mongoose = require('mongoose');

const connectMongodb = async ()=>{
    try {await mongoose.connect('mongodb+srv://chapaeresso1:Chap%4066456763@cluster0.jkg3dln.mongodb.net/mongo-demo?retryWrites=true&w=majority')
        console.log("Db connected successfully")}
    catch{
        (error)=>{
            console.log(error.message)
        }
    }
}
module.exports = connectMongodb;