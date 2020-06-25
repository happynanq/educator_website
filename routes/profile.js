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

  res.send("Hello user")
})
/
// /api/profile/changeData
router.post("/changeData", async (req,res)=>{
  try {
    const {userId, userData} = req.body
    console.log("userId from profile:",userId)
    console.log("userIData from profile:",userData)
    // changedData=JSON.parse(changedData)
    const userNewData = await User.findByIdAndUpdate(userId,{ avatar: userData})
    console.log(userNewData)
    res.status(201).json({message:"Пользователь Изменён!",userNewData})
  } catch (e) {
    console.log("Profile Error: ",e)
  }
  
})

module.exports = router
