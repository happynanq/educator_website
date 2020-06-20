const {Router} = require("express")
const config = require("config")
const Post = require("../models/Post")
const router = Router()


// /api/blog

router.get('/', (req,res)=>{
  res.send("HELLO")
})
// /api/blog/getCard
router.post("/getCard",async(req,res)=>{
  console.log("hello there! getCard here!")
  const allCard = await Post.find()
  console.log(allCard)
  console.log("WEWE POWER")
  res.json({message:"Все карточи успешно получены!",card:allCard})
})

module.exports = router