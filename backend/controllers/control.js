const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')

// @Desc    Get Goals
// @route   GET /api/goals
// @access  Private
const GetGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({ user: req.user.id })
      res.status(200).json(goals)
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
    // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
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
    
  // Check for user
  if (!req.user) {
    res.status(401)
    throw new Error('User not found')
  }

  // Make sure the logged in user matches the goal user
  if (goal.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
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