const {Router} = require("express")
const config = require("config")
const Post = require("../models/Post")
const router = Router()

// /api/create

router.get('/', (req,res)=>{
  res.send("HELLO")
})

router.post("/addCard",(req,res)=>{
  try {
    console.log('req.body add card :', req.body )
    const {titleImg, titleHeader, titleText,text} = req.body 
    console.log(titleImg)
    const post = new Post(req.body )
    console.log(post)
    post.save()
    res.status(201).json({message:"Страница успешно создана"})
  } catch (e) {
    res.status(500).json({falseMessage:"Ошибка бэкенда: данные createTitle'a"})
    console.log("create title error",e)
  }
  
})

module.exports = router