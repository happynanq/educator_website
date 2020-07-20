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
  const allCard = await Post.find({})
  res.json({message:"Все карточи успешно получены!",card:allCard})
})

// /api/blog/getCurrentArticleText
router.post("/getCurrentArticleText",async(req,res)=>{
  const title = await Post.findOne({_id:req.body.id})
  res.json({message:"Вы получили карточку!",title})
})

module.exports = router