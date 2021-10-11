const mongoose = require('mongoose')

const vaccinceSchema= new mongoose.Schema({
    aadharNo:{
        type: String,
        required: true
    },
    vaccination:{
        type:Boolean,
        required: true
    },
    ip:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    }

})

module.exports = mongoose.model('vaccinedata',vaccinceSchema)