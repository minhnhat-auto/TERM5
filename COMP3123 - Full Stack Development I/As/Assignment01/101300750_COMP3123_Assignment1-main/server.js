const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute')
const empRoutes = require('./routes/EmployeeRoute')


const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/api/user", userRoutes)
app.use("/api/emp", empRoutes)


mongoose.connect(
    "mongodb://127.0.0.1:27017/employees", 
    { useNewUrlParser: true, useUnifiedTopology: true }
);


app.route("/")
    .get((req, res) => {
        res.send("<h1>MogoDB + Mongoose Example</h1>")
    })

app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});