const asyncHandler=require('express-async-handler')

// @desc Get TaskList
// @route GET /api/task
// @access Private
const getTaskList=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'get task list'})
})

// @desc Set TaskList
// @route POST /api/task
// @access Private
const setTaskList=asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field');
    }
    res.status(200).json({message:'post task list'})
})

// @desc Update TaskList
// @route UPDATE /api/task
// @access Private
const updateTaskList=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'update task list'})
})

// @desc Delete TaskList
// @route DELETE /api/task
// @access Private
const deleteTaskList=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'delete task list'})
})

module.exports={
    getTaskList,
    setTaskList,
    updateTaskList,
    deleteTaskList,
}