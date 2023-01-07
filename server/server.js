require("dotenv").config()
const express = require("express")
const app = express()
const mongodb=require("./ComponentBackend/Mongodb")
const cors = require("cors")
const PORT = process.env.PORT || 5000;

mongodb();



app.use(express.json())
app.use(cors())
app.use(require('./Router/Auth'));


// app.get("/",(req,res) => {
//     res.send("<h1>Hello world!!</h1>")
// })

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`)
})