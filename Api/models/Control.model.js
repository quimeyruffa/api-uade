var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ControlSchema = new mongoose.Schema({
    child:String,
    fecha: String,
    peso: String,
    altura: String,
    diametro: String,
    observaciones: String,
    history: Array,
    estudios: Array
})

ControlSchema.plugin(mongoosePaginate)
const Control = mongoose.model('Control', ControlSchema)

module.exports = Control;