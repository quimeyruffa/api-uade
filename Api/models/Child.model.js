var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var ChildSchema = new mongoose.Schema({
    parent:String,
    name: String,
    birth: String,
    bloodType: String,
    alergias: Array,
    enfermedades: Array,
    telefono: Number
})

ChildSchema.plugin(mongoosePaginate)
const Child = mongoose.model('Child', ChildSchema)

module.exports = Child;