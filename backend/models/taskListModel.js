const mongoose=require('mongoose')


const taskListSchema=mongoose.Schema(
    {
        user_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        task:{
            type:String,
            required:[true,'task tidak boleh kosong']
      }
    },
    {
        timestamps:true
    }

)

module.exports=mongoose.model('taskList',taskListSchema)