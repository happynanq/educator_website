
const {Schema, model} = require("mongoose")

const schema = new Schema({
  // registerDate: (new Date).toLocaleDateString(),
  
  password: {type:String, required:true},
  email:{type:String, required:true},
  links:[{type:Schema.Types.ObjectId, ref:"Link"}]
  

})

module.exports = model("User", schema)