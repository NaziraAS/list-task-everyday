const express=require('express')
const dotenv=require('dotenv').config()
const {errorHandler}=require('./middleware/errorHandler')
const connectDB=require('./config/db')
const port=process.env.PORT || 5000
connectDB()
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/task', require('./routes/taskListRoutes'))
app.use('/api', require('./routes/userRoutes'))
app.use(errorHandler)


app.listen(port, ()=>{
    console.log('success running server')
})