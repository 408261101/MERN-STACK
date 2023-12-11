const express = require('express')
const Menu = require('../models/menuModel');
const{
    getMenu,
    getMenus,
    createMenu,
    deleteMenu,
    updateMenu
} = require('../controllers/menuControllers')

const router = express.Router()

// GET all workouts
router.get('/', getMenus)

// GET a single workout
router.get('/:id',getMenu)

// POST a new workout
router.post('/', createMenu)

// DELETE a workout
router.delete('/:id', deleteMenu)

// UPDATE a workout
router.patch('/:id', updateMenu)

module.exports = router