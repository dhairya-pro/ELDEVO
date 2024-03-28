const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber:String,
});

const EmployeeModel = mongoose.model("employee", userSchema);

module.exports = EmployeeModel;