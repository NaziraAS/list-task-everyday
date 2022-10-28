const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT || 5000
const {errorHandler}=require('./middleware/errorHandler')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/task', require('./routes/taskListRoutes'))
app.use(errorHandler)


app.listen(port, ()=>{
    console.log('success running server')
})