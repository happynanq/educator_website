const {Router} = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const config = require("config");
const { route } = require("./blog");
const Comment = require("../models/Comment");
const router = Router()

router.get("/", (req,res)=>{

  res.send("Hello comment")
})
// lYWNo2W95meVg19D


// /api/comment/create
router.post("/create", async (req,res)=>{
  const {text, userId, id} = req.body
  const comment = await new Comment({text, userId, pageId:id})
  await comment.save()
  res.status(201).json({message:"Комментарий был отправлен"})
})
// /api/comment/get

router.post("/get", async (req,res)=>{
  try {
    console.log(req.body)
    const {  pageId} = req.body
    console.log("getComment",  pageId)
    const comments = await Comment.find({pageId})
    res.status(201).json({message:"Комментарии были получены", comments})
  } catch (e) {
    console.log(e)
    res.status(400).json({falseMessage:"Комментарии не были получены"})
  }
  
})


module.exports = router




/*
  1)прочитать бади запроса
  2) сравнить емаил и пароль с монго дб данными
  3)если есть схожесть емалиов дать ошибку "такой емали уже есть"
  4)отправить модель на бд
  */