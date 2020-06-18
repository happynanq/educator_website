const {Schema, model} = require("mongoose")

const schema = new Schema({
  // registerDate: (new Date).toLocaleDateString(),
  
  text:{type:String, required:true},
  titleText:{type:String},
  titleImg:{type:String, required:true},
  file:[{type:String}],
  links:[{type:Schema.Types.ObjectId, ref:"User"}]
  

})

module.exports = model("Post", schema)