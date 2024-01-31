import { getAllLoans, getAllMyLoans, addLoan} from '../controllers/loanController.js'
import express from 'express'
import { authenticatedUser } from '../middleware/authentication.js'

const router = express.Router()

router.route('/').get(getAllLoans).post(authenticatedUser, addLoan)

router.route('/my-loans').get(getAllMyLoans)

export default router