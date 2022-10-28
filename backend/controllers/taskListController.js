const asyncHandler=require('express-async-handler')
const taskList=require('../models/taskListModel')

// @desc Get TaskList
// @route GET /api/task
// @access Private
const getTaskList=asyncHandler(async(req,res)=>{
    const task=await taskList.find()
    res.status(200).json(task)
})

// @desc Set TaskList
// @route POST /api/task
// @access Private
const setTaskList=asyncHandler(async(req,res)=>{
    // cek jika field task kosong, dan tampilkan error
    if(!req.body.task){
        res.status(400)
        throw new Error('please add a text field');
    }

    // find task if found show status task cannot be the same
    let reqData=req.body.task
    
    const caritask=async task=>{
        const getTask=await taskList.find({task: task})
        // console.log(getTask==0)
            if(getTask==0){
                const tasklist=await taskList.create({
                    task:req.body.task
                })
                res.status(200).json(tasklist)
            }else{
                if(getTask[0].task==task){
                    res.status(200).json({message:`task dengan nama ${reqData} sudah ada !`})
                }else{
                    const tasklist=await taskList.create({
                        task:req.body.task
                    })
                    res.status(200).json(tasklist)
                }
            }
    }
    caritask(reqData)


})

// @desc Update TaskList
// @route UPDATE /api/task
// @access Private
const updateTaskList=asyncHandler(async(req,res)=>{
    const task=await taskList.findById(req.params.id)
    if(!task){
        res.status(400)
        throw new Error('Task tidak di temukan')
    }

    const updated=await taskList.findByIdAndUpdate(req.params.id, req.body, {new:true})
    res.status(200).json(updated)
})

// @desc Delete TaskList
// @route DELETE /api/task
// @access Private
const deleteTaskList=asyncHandler(async(req,res)=>{
    const task=await taskList.findByIdAndDelete(req.params.id)
    
    await task.remove();
    res.status(200).json({id:req.params.id})
})

module.exports={
    getTaskList,
    setTaskList,
    updateTaskList,
    deleteTaskList,
}