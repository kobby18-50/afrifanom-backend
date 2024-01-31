
import { getAllCustomers, getCustomer, createCustomer, deleteCustomer } from "../controllers/customerController.js";

import express from 'express'
import { authenticatedUser } from "../middleware/authentication.js";

const router = express.Router()

router.route('/').get(getAllCustomers).post(authenticatedUser, createCustomer)

router.route('/:id').get(getCustomer).delete(authenticatedUser,deleteCustomer)


export default router