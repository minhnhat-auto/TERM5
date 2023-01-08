var express = require("express")

let app = express()

const SERVER_PORT = 8088

//Middleware 
//http://localhost:8088/index.html
//app.use(express.static("views"))

//http://localhost:8088/static/index.html
app.use('/static', express.static("views"))

//http://localhost:8088/
app.get("/", (req, res) => {
    res.send("<h1>GET - Welcome to Express Server</h1>")
})

//http://localhost:8088/
app.post("/", (req, res) => {
    res.send("<h1>POST - Welcome to Express Server</h1>")
})

//http://localhost:8088/hello
app.get("/hello", (req, res) => {
    res.send("Hello, PATEL Pritesh")
})

//http://localhost:8088/student
app.post("/student", (req, res) => {
    let stud = {
        sid: 1,
        first_name: "Pritesh",
        last_name: "Patel"
    }

    slist = [stud, stud, stud]

    //res.send(stud)
    //res.send(JSON.stringify(stud))
    //res.json(stud)
    res.json(slist)
})

//Path OR Route Parameter
//http://localhost:8088/api/professor/1/Pritesh/Patel
app.post("/api/professor/:pid/:pfnm/:plnm", (req, res) => {
    const faculty = {
        professor_id : req.params.pid,
        first_name : req.params.pfnm,
        last_name : req.params.plnm,
        full_name: `${req.params.pfnm} ${req.params.plnm}`,
        dot: Date()
    }
    //res.send(req.params)
    res.send(faculty)
})

//QueryString Parameter
//http://localhost:8088/professor?id=1&fnm=Pritesh&lm=Patel
app.post("/professor", (req, res) => {

    const pid = req.query.pid

    res.send({ ...req.query, dob: Date()} )
    // if(req.query !== undefined){

    // }
})

app.listen(SERVER_PORT, () => {
    console.log("Server Running at http://localhost:%s/", SERVER_PORT)
})


//http://localhost:8088/professor?id=1&fnm=Pritesh&lm=Patel