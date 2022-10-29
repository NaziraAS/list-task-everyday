const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const asyncHandler=require('express-async-handler')
const user=require('../models/userModel')


const getUser=asyncHandler(async(req,res)=>{
    users=await user.find()
    res.status(200).json(users)
})

const setUser=asyncHandler(async (req,res)=>{
    const {username, email, password}= req.body

    if(!username || !email || !password){
        res.status(400)
        throw new error('Semua field harus di isi')
    }


    let salt=await bcrypt.genSalt(10)
    let hash=await bcrypt.hashSync(password, salt)

    const setUser=await user.create({
        username,
        email,
        password:hash,
    })
    res.status(201).json({message:"user berhasil di buat"})
})

const updateUser=asyncHandler(async (req,res)=>{
    const updateUser= await user.findByIdAndUpdate(req.params.id, {
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }, {new:true})
    res.status(200).json(updateUser)
})


const deleteUser=asyncHandler(async (req,res)=>{
    const userId=await user.findByIdAndDelete(req.params.id)
    await userId.remove()
    res.status(200).json(userId)
})

const loginUser=asyncHandler(async (req,res)=>{
    const {username, password}=req.body
    const getDataLogin=await user.find({username})
    if(getDataLogin!=0){   
        if(getDataLogin[0].username==username){
            if(await bcrypt.compare(password, getDataLogin[0].password)){
                res.status(200).json({
                    message:"Login berhasil",
                })
            }else{
                res.status(400).json({message:'password salah'})
            }
        }else{
            res.status(400).json({message:'username tidak ada!'})
        }
    }else{
        res.status(400).json({message:'username dan password tidak ada'})
    }
})

module.exports={
    getUser,
    setUser,
    updateUser,
    deleteUser,
    loginUser
}