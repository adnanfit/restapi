const mongoose = require('mongoose')

const goalsSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text: {
    type: String,
    required: [true,' Please Add Text Values'],
    },
},{
    timestamps: true,
}
)
module.exports = mongoose.model('Goal',goalsSchema)