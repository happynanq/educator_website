const {Router} = require("express")
const config = require("config")
const Post = require("../models/Post")
const { check, validationResult} = require("express-validator")
const router = Router()

// /api/create

router.get('/', (req,res)=>{
  res.send("HELLO")
})

router.post(
  "/addCard"
  ,
  [
    check("text","Введите Текст").exists()
  ],
  (req,res)=>{
  try {
    const errors = validationResult(req) 

    if(!errors.isEmpty()){
      return res.status(400).json({message:"Некорректные данные при регистрации", errors:errors.array()})
    }
    console.log('req.body add card :', req.body )
    const {titleImg, titleHeader, titleText,text} = req.body 
    if(!text){
      return res.status(400).json({ message:"Введите текст"})

    }
    const post = new Post(req.body )
    console.log(post)
    post.save()
    res.status(201).json({message:"Страница успешно создана"})
  } catch (e) {
    res.status(500).json({message:"Ошибка бэкенда: данные createTitle'a"})
    console.log("create title error",e)
  }
  
})

module.exports = router