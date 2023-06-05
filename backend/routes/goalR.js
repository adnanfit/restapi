const express = require('express')
const router = express.Router()
const {GetGoals, PutGoals, SetGoals, DeleteGoals} = require('../controllers/control')

const { model } = require('mongoose')

    router.get('/', GetGoals).post('/',SetGoals)
    router.delete('/:id', DeleteGoals).put('/:id', PutGoals)

module.exports = router 