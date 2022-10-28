const express=require('express')
const router=express.Router()
const {getTaskList, setTaskList, updateTaskList, deleteTaskList}=require('../controllers/taskListController')

router.route('/').get(getTaskList).post(setTaskList)

router.route('/:id').put(updateTaskList).delete(deleteTaskList)




module.exports=router

