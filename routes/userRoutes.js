import { getAllUsers, updateUser, } from '../controllers/userController.js'
import { authenticatedUser } from '../middleware/authentication.js'

import express from 'express'

const router = express.Router()

router.get('/', getAllUsers)

router.patch('/updateUser', authenticatedUser, updateUser)


export default router