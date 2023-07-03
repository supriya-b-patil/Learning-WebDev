const express = require("express")
const notes = require("./data/notes")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const noteRoutes = require('./routes/noteRoutes')
const userRoutes = require("./routes/userRoutes")
const { notFound, errorHandler } = require("./middlwares/errors.Middlewares")
const path = require('path')

const app = express()
dotenv.config()
connectDB()
app.use(express.json())



app.use("/api/users", userRoutes)
app.use("/api/notes", noteRoutes)

//-------------------Deployment-----------------

__dirname = path.resolve()
if (process.env.NODE_ENV === "production") {
   app.use(express.static(path.join(__dirname, '/frontend/build')))
   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
   })
} else {
   app.get("/", (req, res) => {
      res.send("Hello")
   })
}
//-------------------Deployment-----------------
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
   console.log(`server is started on port ${PORT}`)
})