 import { StatusCodes } from 'http-status-codes'
import Customer from '../models/Customer.js'


 const getAllCustomers = async (req,res) => {
    const customers = await Customer.find({})

    res.status(StatusCodes.OK).json({customers, count : customers.length})
 }

 const getCustomer = async (req,res) => {

    const { id : customerId } = req.params

    const customer = await Customer.findOne({_id : customerId})

    res.status(StatusCodes.OK).json({customer})

   }

 const createCustomer = async (req,res) => {
    const {userId} = req.user

    const customer = await Customer.create({...req.body, createdBy : userId })

    res.status(StatusCodes.CREATED).json({customer})

 }

 const deleteCustomer = async(req,res) => {
    const {id : customerId} = req.params

    await Customer.findOneAndDelete({_id : customerId})

    res.status(StatusCodes.OK).json({msg : 'Customer deleted'})
 }


 export {
    getAllCustomers, getCustomer, createCustomer, deleteCustomer
 }