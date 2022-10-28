const mongoose=require('mongoose')


const taskListSchema=mongoose.Schema(
    {
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