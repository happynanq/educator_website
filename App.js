const express  = require("express")
const { request } = require("express")
const mongoose = require("mongoose")
const config = require("config")
const bodyParser = require('body-parser')
const session = require("express-session")
// const redisStorage = require('connect-redis')(session)
// const redis = require('redis')
const cors = require("cors")
const app = express()
app.use(cors())
// const client = redis.createClient()
const host = "127.0.0.1"
const port = "5000"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({extended:true}))
app.use(express.json({extended:true})) // ? какая то хрень
app.use("/api/auth", require("./routes/auth"))

app.use(session({
  secret:"My secret key",
  saveUninitialized:true,
  resave:true,
  // store:new redisStorage({
  //   host,
  //   port,
  //   client
  // })
}))


async function start(){
  try {
    await mongoose.connect(config.get("mongoURI"),
    {
      useNewUrlParser: true,
      useUnifiedTopology:true,
      useCreateIndex:true
    })

    app.listen(5000, ()=>{
      console.log("[Server has been started]")
    })
  } catch (error) {
    console.log("[Server Error] ", error)
    process.exit(1)
  }
}
start()