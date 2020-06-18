
const {Schema, model} = require("mongoose")

const schema = new Schema({
  // registerDate: (new Date).toLocaleDateString(),
  
  password: {type:String, required:true},
  email:{type:String, required:true},
  privilege : {type:String, default:"User"},
  userName:{type:String, required:true},
  userId:{
    type:Schema.Types.ObjectId,
    ref:"Post"
  }
  

})

module.exports = model("User", schema)