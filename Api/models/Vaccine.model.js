var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var VaccineSchema = new mongoose.Schema({
    child:String,
    nameVaccine: String,
    dateChild: String,
    lugar: String,
    fechaVacunacion: String
})

VaccineSchema.plugin(mongoosePaginate)
const Vaccine = mongoose.model('Vaccine', VaccineSchema)

module.exports = Vaccine;