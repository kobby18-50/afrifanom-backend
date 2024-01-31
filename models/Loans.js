
import mongoose from "mongoose";

const LoanShema =  new mongoose.Schema({
    customerName : {
        type : String,
        required : true
    },

    loanamount : {
        type : Number,
        required : true
    },

    loanperiod : {
        type : Number,
        required : true
    },

    amountPayable : {
        type : Number,
        required : true
    },

    interest : {
        type : Number,
        required : true
    },

    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required: true
    }
}, {timestamps:true})

export default mongoose.model('Loans', LoanShema)