const express = require("express");
const app = express();
require("dotenv").config()
const connectDB = require("./db/connection")

//Routes
const taskRouter = require("./routes/task")


//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use('/api/v1/tasks', taskRouter)

app.get("/", (req, res) => {
    res.send('Hello ')
})

const port = 4000;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, (err) => {
            if (err) console.log(err);
            else console.log("Server Running at port 4000...");
        })
    } catch (error) {
        console.log(error);
    }
}
start();