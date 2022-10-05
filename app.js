const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const generalRoutes = require("./routes/general")
const shopsRoutes = require("./routes/shops")

const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
// app.use('/admin',plumbersRoutes)
app.use("/admin/dealers", generalRoutes)
app.use("/admin/sub_dealers", generalRoutes)
app.use("/admin/plumbers", generalRoutes)
app.use("/admin/shops", shopsRoutes)

app.all("*", (req, res, next)=> {
    const err = new Error(`Requested URL ${req.path} not found!`)
    err.statusCode = 404
    next(err)
})
app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500
    console.log("Error Msg", err.message)
    res.status(statusCode).json({
        message: {title: "Changes Unsuccessful", messageType: "error"},
        errorMessage: err.message,
        stack: err.stack
    })
})
app.listen(4000, ()=> console.log("Server is listening on port 4000"))