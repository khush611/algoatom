const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/algoscale")
  .then(() => console.log("Connected to Database"))
  .catch((err)=>console.log("Error in MongoDB Connection"+ err));

  const enquirySchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
    time:Number
  })
  const Enquiry = mongoose.model('Enquiry',enquirySchema);

    let date = 1601510400000; //date 1 OCT 2020  3OCT
    for(let d=1;d<=54;++d, date+=86400000)
      {
          for(let i=1, j=100;i<=Math.floor((Math.random() * 8) + 1);j-=10,++i){
              new Enquiry({
                  name: `user ${i}${j}`,
                  email: `user123${i}${j}@gmail.com`,
                  message: `check message.how are you!${i}${j}`,
                  time: date
              }).save().then(()=>console.log('added'));
              }
      }
