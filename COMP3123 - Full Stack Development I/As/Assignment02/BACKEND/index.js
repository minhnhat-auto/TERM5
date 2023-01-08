import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import loginRoutes from "./routes/login.js";
import userRoutes from "./routes/users.js";

const app = express()
const PORT = 4000;

app.use(express.json())
app.use(express.urlencoded())
app.use(bodyParser.json());
app.use(cors());

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT,POST, GET, DELETE, OPTIONS');
    next();
})
app.use("/login", loginRoutes)
app.use("/", userRoutes)



app.get("/",(req, res) => res.send("Hello"));
app.all("*", (req, res) => res.send("That route doesn't exist"));

app.listen(PORT, () => console.log(`Server is listening on port : http://localhost:${PORT}`));
