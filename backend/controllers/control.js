const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalsModel')

// @Desc    Get Goals
// @route   GET /api/goals
// @access  Private
const GetGoals =  asyncHandler(async (req, res) => {

    const goals = await Goal.find()
    res.status(200).json(goals)

   // res.status(200).json({ message:'GETTING GOALS'})
})

// @Desc    set Goals
// @route   SET /api/goals
// @access  Private
const SetGoals = asyncHandler(async (req, res) => {
  
    if(!req.body.text){
    res.status(400)
    throw new Error('Please Add Text Feild')
}

const goals = await Goal.create({
    text: req.body.text
})
res.status(200).json(goals)
})
// @Desc    Put Goals
// @route   PUT /api/goals:id
// @access  Private
const PutGoals =asyncHandler( async (req, res) => {

    const goals = await Goal.findById(req.params.id)

    if(!goals){
        res.status(400)
        throw new Error('Cannot Find the Goals')
    }

    const UpdatedGoals = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        const : true,
    })

    res.status(200).json(UpdatedGoals)
})
// @Desc    Delete Goals
// @route   DELETE /api/goals:id
// @access  Private
const DeleteGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.findById(req.params.id)
    if(!goals){
        res.status(400)
        throw new Error('File not Find')
    }
    await goals.remove
   
    res.status(200).json( {id: req.params.id, message: 'Deleted Successfully'})
})

module.exports = {
    GetGoals,
    SetGoals,
    PutGoals,
    DeleteGoals

}