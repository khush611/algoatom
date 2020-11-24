const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect("mongodb://localhost/algoscale").then(()=>console.log("connected to db..."));

const app = express();//server
app.use(express.json());
app.use(cors());
const enquirySchema = new mongoose.Schema({
  name:String,
  email:String,
  message:String,
  time:Number
})
//class/model
const Enquiry = mongoose.model('Enquiry',enquirySchema);


app.post('/submitEnquiries',(req,res)=>{
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const time = Date.now();
  //fields
  const enquiryObj = new Enquiry({
    name,
    email,
    message,
    time
  })

  //store
  enquiryObj.save().then(()=>{
    res.send();
  })
})


//posting date range and getting ..
app.post('/getEnquiries',(req,res)=>{
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  Enquiry.find()
  .then((data) => {
    const list = [];
    const oneDay = 86400000;
    for (let date = startDate; date <= endDate; date += oneDay) {
      list.push({
        date: date,
        size: data.filter((record) => record.time === date).length + 1,
      });
    }
    res.send(list);
  })

})

app.listen(8080,()=>console.log("listening to client requests...."));
