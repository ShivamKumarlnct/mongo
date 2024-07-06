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

//it is insert multiple 
User.insertMany([
  {name:"tony",email:"tony@gmail.com",age:50},
  {name:"aman",email:"aman@gmail.com",age:20},
  {name:"tanu",email:"tanu@gmail.com",age:30},
]).then((res)=>{
  console.log(res);
})

//insert only one data

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