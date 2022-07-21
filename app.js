const express = require('express')
const tasks = require('./routes/tasks')
require("./db/connect")

const app =express()

//Middleware


//Routes
app.use("/api/v1/tasks", tasks)



const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Process running on port ${PORT}...`);
})