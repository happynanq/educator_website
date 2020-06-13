const {Router} = require("express")
const User = require("../models/User")
const bcrypt = require("bcrypt")
const { check, validationResult } = require('express-validator');
const jwt = require("jsonwebtoken")
const config = require("config")
const router = Router()

// /api/auth/register
router.get("/register",(req,res)=>{
  console.log("req.session",req.session)

  res.send("Hello")
})
// lYWNo2W95meVg19D
router.post("/register",[
  check("email").isEmail(),
  check("password").isLength({min:6})
], async(req, res)=>{
  console.log("req.session",req.session)

  console.log("req.body register : ",req.body)

  try {
    console.log("object1")
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // res.setHeader('wewePower', 'wewe')

    const errors = validationResult(req)
    if(!errors.isEmpty()){
      return res.status(400).json({
        message : "Ошибка аутентификацию: некорректны данные регистрации ",
        errors: errors.array()
      })
    }
    console.log("object2")

    const {email,password} = req.body
    console.log("wewePOWER")
    const candidate = await User.findOne({email})
    if(candidate){
      console.log('candidate ', candidate)
      res.status(400).json({falseMessage: "Такой email уже существует"})
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const user = new User({
      email, password: hashedPassword
    })
    console.log("hashedPassword", hashedPassword)
    await user.save()
    console.log("object")
    res.status(201).json({falseMessage:"Пользователь успешно создан"})

  } catch (e) {
    console.log("my registerError: ",e)
    res.status(500).json({falseMessage:`что-то пошло не так при регистрации, ${e}`})
  }
})

// /api/auth/login

router.post("/login", [
  check("email").normalizeEmail().isEmail(),
  check("password", "Введите пароль").exists()

],
  async(req, res)=>{
    console.log("req.session",req.session)
    try {
      console.log("req.body login : ",req.body)
      const errors = validationResult(req)
      if(!errors.isEmpty()){
        return res.status(400).json({
          falseMessage : "Ошибка аутентификацию: некорректны данные при входе ",
          errors: errors.array()
        })
      }
      const {email,password} = req.body
      const user = await User.findOne({email})
      if(!user){
        res.status(400).json({falseMessage:"Неверные данные(емаил)"})       
      }

      const isMath = await bcrypt.compare(password, user.password)
      if(!isMath){
        return res.status(400).json({falseMessage:"Неверные данные(пароль) "})
      }

      const token = jwt.sign(
        {userId:user.id},
        config.get("jwtSecret"),
        {expiresIn:"1h"}
      )

      res.json({token, userId:user.id, message:"welcome"})
      // TODO: записать данные в ui->bll(redux)
  } catch (e) {
    res.status(400).json({falseMessage:"Неизвестная ошибка регистрации"})
  }
})



module.exports = router




/*
  1)прочитать бади запроса
  2) сравнить емаил и пароль с монго дб данными
  3)если есть схожесть емалиов дать ошибку "такой емали уже есть"
  4)отправить модель на бд
  */