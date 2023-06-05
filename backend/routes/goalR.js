const express = require('express')
const router = express.Router()
const {GetGoals, PutGoals, SetGoals, DeleteGoals} = require('../controllers/control')
const {protect} = require('../middleware/authMiddleWare')

router.route('/').get(protect, GetGoals).post(protect, PutGoals)
router.route('/:id').delete(protect, DeleteGoals).put(protect, SetGoals)

module.exports = router 