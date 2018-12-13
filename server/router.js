const express = require('express');

const {addItem, deleteItem, getAllItems, editItem} = require('./controller.js');

const router = express.Router();

router.route('/Players/')
.get(getAllItems)
.post(addItem)
.put(editItem)


router.route('/Players/:id')
.delete(deleteItem)

module.exports = router;
