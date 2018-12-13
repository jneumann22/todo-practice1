const {List} = require('./model.js');

const addItemHelper = (playerName, playerNum, callback) => {
new List({playerName, playerNum}).save((err, data) => {
    if (err) {
        console.error(err)
    } else {
        callback()
    }
})

}

const deleteItemHelper = (id, callback) => {
    List.deleteOne({_id: id},(err, data) => {
        if (err) {
            console.error(err)

        } else {
            callback()
        }
    })
}




const getAllItemsHelper = (callback) => {
    List.find({}, (err, data)=> {
        if (err) {
            console.error(err)
        } else {
            callback(data)
        }
    })
}


const editItemHelper = (playerName, playerNum, id, callback) => {
    List.updateOne({_id: id}, {playerName: playerName, playerNum: playerNum}, (err, data)=> {
        if (err) {
            console.error(err)
        } else {
            callback()
        }
    })
}

module.exports = {addItemHelper, deleteItemHelper, getAllItemsHelper, editItemHelper};