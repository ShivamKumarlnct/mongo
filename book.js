const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
 
main().then(()=>{
    console.log("Connection Succecful");
}).catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazone');
}

const bookSchema=mongoose.Schema({
  title:{
    type:String,
    required:true,
  },
  author:{
    type:String,
  },
  price:{
    type:Number,
    min:1,
  },
  discount:{
    type:Number,
    default:0,
  },
  category:{
    type:String,
    enum:["fiction","non-fiction"],
  },
  genre:[String],

  

});
const Book=mongoose.model('Book',bookSchema);

// ----------add one-----------
// let book2=new Book({
//     title:"Code change your mind",
//     author:"shivam and rai",
//     price:200000,
//     genre:["coding","better mind"],
// })
// book2.save().then(res =>{
//     console.log(res);
// }).catch(err=>{
//     console.log(err);
// })

// --------update--------
Book.findByIdAndUpdate("668ef025e5101f11c901e756",{price:-100},{author:"shivam kumar gupta"},{runValidators:true}).then((res)=>{
console.log(res);
}).catch((err)=>{
console.log(err);
})