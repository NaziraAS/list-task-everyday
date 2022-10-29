const express=require('express')
const router=express.Router()

const {getUser, setUser, updateUser, deleteUser, loginUser}=require('../controllers/userController')

router.route('/user').get(getUser).post(setUser)
router.route('/user/:id').put(updateUser).delete(deleteUser)
router.route('/login').post(loginUser)

module.exports=router