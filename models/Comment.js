const {Schema, model} = require("mongoose")

const schema = new Schema({
  text:{type:String, required:true},
  userId:{ref:"User", required:true,type:Schema.Types.ObjectId},
  pageId:{ref:"Post", required:true,type:Schema.Types.ObjectId},
  

})

module.exports = model("Comment", schema)