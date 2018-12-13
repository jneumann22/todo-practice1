const {addItemHelper, getAllItemsHelper, deleteItemHelper, editItemHelper} = require('../database/dbHelpers.js');

const addItem = (req, res) => {
    let {playerName, playerNum} = req.body
    addItemHelper(playerName, playerNum, () => res.status(201).send('added'))
}

const getAllItems = (req, res) => {
    getAllItemsHelper((result) => res.status(200).send(result))
}

const deleteItem = (req, res) => {
    let {id} = req.params
    deleteItemHelper(id, () => res.status(204).send('deleted'))
}


//possible need to fix here
const editItem = (req, res) => {
    let {playerName, playerNum, _id} = req.body
    editItemHelper(playerName, playerNum, _id, ()=> res.status(203).send('updated'))
}


module.exports = {addItem, getAllItems, deleteItem, editItem};