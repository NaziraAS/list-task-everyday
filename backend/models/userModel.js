const mongoose=require('mongoose')

const userSchema=mongoose.Schema(
    {
        username:{
            type:String,
            required:[true, 'Username tidak boleh kosong']
        },
        email:{
            type:String,
            required:[true, 'Email tidak boleh kosong']
        },
        password:{
            type:String,
            required:[true,'Password tidak boleh kosong']
        }
    },
    {
        timestamps:true
    }
)

module.exports=mongoose.model('User',userSchema)