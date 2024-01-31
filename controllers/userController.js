import User from "../models/User.js"
import { StatusCodes } from 'http-status-codes'
import createTokenUser from "../utils/createTokenUser.js"
import { attachCookieToResponse, createToken } from "../utils/jwt.js"
import checkPermissions from "../utils/checkPermissions.js"
import NotFoundError from '../errors/not-found.js'
import BadRequestError from "../errors/bad-request.js"
import UnAuthenticatedError from "../errors/unauthenticated.js"


const getAllUsers = async (req,res) => {

    const users = await User.find({role : 'agent'}).select('-password')
    res.status(StatusCodes.OK).json({users, count : users.length})
}


const updateUser = async (req,res) => {

    const { userId } = req.user

    console.log(req.user)

    const { name, role, phone } = req.body

    if(!name || !role || !phone){
        throw new BadRequestError('Some values were not provided')
    }

    const user = await User.findOne({_id : userId})

    if(!user){
        throw new NotFoundError('No user found')
    }

    // checkPermissions(req.user, userId )

   
    // user.name = req.user.name,
    // user.role = req.user.role
    user.phone = phone

    await user.save()

    res.status(StatusCodes.ACCEPTED).json({msg : 'User updated'})

    
}







export {
    getAllUsers, updateUser
}