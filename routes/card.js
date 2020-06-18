const {Router} = require("express")
const config = require("config")
const router = Router()

router.get('/', (req,res)=>{
  res.send("HELLO")
})

router.post("/getCard",(req,res)=>{
  // let {}
})

module.exports = router