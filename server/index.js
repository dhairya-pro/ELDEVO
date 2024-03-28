const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const CallbackModel = require('./models/Callback.js');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/new")
.then(() => {
  console.log("Connected to database successfully");
})
.catch((error) => {
  console.error("Error connecting to database: ", error);
});


//  app.post('/form',(req,res)=>{
//    const{email,phonenumber}=req.body;
//    EmployeeModel.findOne({email : email})
//   .then(user =>{
//     if(user){
//       console.log(user.phonenumber)
//       if(user.phonenumber == phonenumber)
//       {
        
//         res.json("success")

//       }    
//       else{
//         res.json("phone-number is incorrect")
      
//       }
//      }
//      else{
//       res.json("no record found")
//     }
//    })
//  })

 app.post('/form',async(req,res)=>{
  try{
    const {email , name , phoneNumber , message} = req.body;

    const user = await EmployeeModel.findOne({email:email});
    if(!user){
     
      return res.send("No-record-found")
        
    
    }
    if(user.phoneNumber == phoneNumber){
      await CallbackModel.create({
        name,
        email,
        phoneNumber,
        message,
      })
   
      return res.send("success")
    }
  }catch(error){
  return  res.send("Internal Server Error")
  }
 })





app.post('/api/node', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err));
});

app.post('/api/login',(req,res)=>{
  const {email,password} =req.body;
  EmployeeModel.findOne({email : email})
  .then(user =>{
    if(user) {
      if(user.password == password){
        res.json("success")
      }
      else{
        res.json("password is incorrect")
      
      }
    }
    else{
      res.json("no record found")
    }
  })
})


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});