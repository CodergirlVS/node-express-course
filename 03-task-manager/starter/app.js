const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect')
require("dotenv").config();

// setup static and middleware
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)


//routes
app.get('/hello', (req, res) => {
    res.send("Task Manager APP")
})

const port = 3000

const start = async () => { 
    try {
        await connectDB(process.env.MONGODB_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))

    } catch(error){
        console.log(error, "Error in connecting")
    }
}
start()
