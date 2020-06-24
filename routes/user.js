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
  console.log("req.session",req.session)

  res.send("Hello user")
})
// lYWNo2W95meVg19D
// router.post("/getUser", async (req,res)=>{
//   const {userId} = req.body
//   console.log("userId from user route:",userId)
//   const userName = await User.findOne({_id:userId})
//   console.log(userName)
//   res.status(201).json({message:"Пользователь получен!",userName})
// })

// /api/user/getName
router.post("/getUser", async (req,res)=>{
  const {userId} = req.body
  console.log("userId from user route:",userId)
  const userData = await User.findOne({_id:userId})
  console.log(userData)
  res.status(201).json({message:"Пользователь получен!",userData})
})





module.exports = router




/*
  1)прочитать бади запроса
  2) сравнить емаил и пароль с монго дб данными
  3)если есть схожесть емалиов дать ошибку "такой емали уже есть"
  4)отправить модель на бд
  */