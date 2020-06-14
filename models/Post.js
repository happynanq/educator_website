const {Schema, model} = require("mongoose")

const schema = new Schema({
  // registerDate: (new Date).toLocaleDateString(),
  
  text:{type:String, required:true},
  img:[{type:String, required:true}],
  file:[{}],
  links:[{type:Schema.Types.ObjectId, ref:"User"}]
  

})

module.exports = model("Post", schema)