const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const feedbackRoutes = require("./routes/feedbackRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/feedback", feedbackRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/feedbackDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err))

app.get("/", (req,res)=>{
    res.send("Backend working Successfully")
})

app.listen(5000, ()=>{
    console.log("Server running on port 5000")
})