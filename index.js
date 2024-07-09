const mongoose = require("mongoose")
 
main().then(()=>{
    console.log("Connection Succecful");
}).catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
  name:String,
  email:String,
  age:Number,
})
const User=mongoose.model('User',userSchema);

// -----------model find------------------
// User.find({}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// ----------------------
// User.findById("66885de91cf672919ef50129").then((res)=>{
//   // console.log(res[0].name);
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

//it is insert multiple ----------------
// User.insertMany([
//   {name:"tony",email:"tony@gmail.com",age:50},
//   {name:"aman",email:"aman@gmail.com",age:20},
//   {name:"tanu",email:"tanu@gmail.com",age:30},
// ]).then((res)=>{
//   console.log(res);
// })

//insert only one data---------------------

// const user1=new User({
//   name:"shivam",
//   email:"shivamsitu2gmail.com",
//   age:22,
// })
// const user2=new User({
//   name:"shivam kumar",
//   email:"shivamsitu@gmail.com",
//   age:21,
// })
// user1.save();
// user2.save().then((res)=>{//it defind the err
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// ----update one------------
// User.updateOne({name:"tanu"},{age:200}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })
// ------update many---------
// User.updateMany({age:{$gt:25}},{age:35}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })

// ------------findandupdate------------
// User.findOneAndUpdate({name:"tanu"},{age:22},{new:true}).then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// -------findbyid-----------------

// User.findByIdAndUpdate("6689a42c5f272dbbbce1645b",{age:42},{new:true}).then((res)=>{
// console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// ---------delete------------
// User.deleteOne({name:"shivam"}).then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// ---------delete many--------------
// User.deleteMany({age:35}).then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// ------findbyidanddelet------

// User.findByIdAndDelete("6689a603856e184c9d32a51f").then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })

// ---findOneanddelete----------

// User.findOneAndDelete({name:"aman"}).then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })