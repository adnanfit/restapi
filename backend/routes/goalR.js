const express = require('express')
const router = express.Router()
const {GetGoals, PutGoals, SetGoals, DeleteGoals} = require('../controllers/control')
const {protect} = require('../middleware/authMiddleWare')

    router.get('/', GetGoals)
    router.post('/', SetGoals)
    router.delete('/:id', DeleteGoals)
    router.put('/:id', PutGoals)

module.exports = router 