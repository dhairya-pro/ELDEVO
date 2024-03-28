const mongoose= require('mongoose')


const callbackschema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber:String,
    message:String,
});

const CallbackModel = mongoose.model("callback", callbackschema);

module.exports = CallbackModel;