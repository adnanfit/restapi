const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: [true,'Please add Name']
    },
    password: {
            type: String,
            required: [true,'Please add Password']
    },
    email:{
        type: String,
        required: [true,'Please add email']
    },
},{
    timestamps: true
})
module.exports = mongoose.model('User', userSchema)