const express  = require("express")
const { request } = require("express")
const mongoose = require("mongoose")
const config = require("config")

const app = express()
app.get("/", (req, res)=>{
  res.send("Hi")
})
app.use("/api/auth", require("./routes/auth"))

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
    console.log("[Server Error] ")
    process.exit(1)
  }
}
start()