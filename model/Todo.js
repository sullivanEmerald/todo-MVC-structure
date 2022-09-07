const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const TodoShema = new mongoose.Schema({
    todo : {
        type : String,
        required: true,
    },

    completed : {
        type: Boolean,
        required : true,
    }
})


module.exports = mongoose.model('Todo', TodoShema)