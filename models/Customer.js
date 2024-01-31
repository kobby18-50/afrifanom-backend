import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({

    firstname : {
        type : String,
        required : [true, 'First name is required'],
        minlength : 5
    },

    othername : {
        type : String,
    },

    lastname : {
        type : String,
        required : [true, 'Last name is required'],
        minlength : 5
    },

    maritalStatus : {
        type : String, 
        enum : ['single', 'married', 'divorced'],
        required : [true, 'Marital Status is required']
    },

    idcard : {
        type : String,
        required : [true, 'Id card is required']
    },

    phone : {
        type : String,
        required : [true, 'Phone number is required'],
        minlength : 10,
        maxlength : 13
    },

    
    employer : {
        type : String,
        required : [true, 'Employer is required']
    },
    
    dob : {
        type : Date,
        required : [true, 'Date of birth is required']
    },

    
    address : {
        type : String,
        required : [true, 'Address is required']
    },

    createdBy : {
        type : mongoose.Types.ObjectId,
        ref : 'User',
        required : [true, 'Agent id is required']

    }
}, {timestamps : true})

export default mongoose.model('Customer', CustomerSchema)