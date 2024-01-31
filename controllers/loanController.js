import { StatusCodes } from "http-status-codes"
import Loans from "../models/Loans.js"

const getAllLoans = async (req,res) => {
    const loans = await Loans.find({}).sort('-updatedAt')

    res.status(StatusCodes.OK).json({loans, count : loans.length})
}


const getAllMyLoans = async (req,res) => {
    const loans = await Loans.find({createdBy : req.user.userId})

    res.status(StatusCodes.OK).json({loans , count : loans.length})
}


const addLoan = async (req,res) => {
    const {loanamount, loanperiod, customerName} = req.body

    const rate = 0.5

    const calcInterest = (principal,rate,time) => {
        return (principal * rate * time ) / 100
      }
      
    const {userId} = req.user

    const createdBy = userId

    const interest = calcInterest(loanamount, rate, loanperiod)

    const amountPayable = loanamount + calcInterest(loanamount, rate, loanperiod )


    const loan = await Loans.create({customerName, loanamount,loanperiod,amountPayable, interest, createdBy})

    res.status(StatusCodes.CREATED).json({loan})

}

export {
    getAllLoans, getAllMyLoans, addLoan
}