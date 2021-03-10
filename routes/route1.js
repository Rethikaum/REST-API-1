const express = require('express')
const router = express.Router()
const table = require('../models/model1')

router.get('/', async(req, res) => {
    try {
        const values = await table.find()
        res.json(values)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        res.json(value)
    } catch (err) {
        res.send('Error ' + err)
    }
})


router.post('/', async(req, res) => {
    const values = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const a1 = await values.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.patch('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.save()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try {
        const value = await Model.findById(req.params.id)
        value.sub = req.body.sub
        const a1 = await value.remove()
        res.json(a1)
    } catch (err) {
        res.send('Error')
    }
})


module.exports = router
