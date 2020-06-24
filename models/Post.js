const {Schema, model} = require("mongoose")

const schema = new Schema({
  // registerDate: (new Date).toLocaleDateString(),
  
  text:{type:String, required:true},
  titleHeader:{type:String, required:true},
  titleText:{type:String, required:true},
  titleImg:{type:String, required:true},
  link:{type:Schema.Types.ObjectId},

})

module.exports = model("Post", schema)