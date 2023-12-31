const Menu = require('../models/menuModel');
const mongoose = require('mongoose')

// get all menu
const getMenus = async (req, res) => {
    const menus = await Menu.find({}).sort({createdAt: -1})
    res.status(200).json(menus)
}

// get a single menu
const getMenu = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})
      }
    const menu = await Menu.findById(id)
    if (!menu) {
        return res.status(404).json({error: 'No such menu'})
      }

    res.status(200).json(menu)
}
  
// create a new menu
const createMenu = async (req, res) => {
const{name ,price, imageURL,id} = req.body
    try{
        const menu = await Menu.create({name ,price,imageURL,id})
        res.status(200).json(menu)
        }catch(error){
        res.status(400).json({error : error.message})
    }
}
  
  // delete a menu
  const deleteMenu = async (req, res) => {
    const {id} = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such menu'})
      }
    
    const menu = await Menu.findOneAndDelete({_id: id})
  
    if (!menu) {
        return res.status(404).json({error: 'No such menu'})
      }
      res.status(200).json(menu)
  }
 
  // update a menu
  const updateMenu = async (req, res) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such menu'})
      }

    const menu = await Menu.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    if (!menu) {
        return res.status(404).json({error: 'No such menu'})
      }
      res.status(200).json(menu)
  }
 


  module.exports = {
    getMenu,
    getMenus,
    createMenu,
    deleteMenu,
    updateMenu
  }