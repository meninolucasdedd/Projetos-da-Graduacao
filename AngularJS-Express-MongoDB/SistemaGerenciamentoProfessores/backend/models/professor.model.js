var mongoose = require('mongoose');

var ProfessorSchema = mongoose.Schema(
    {
        nome: {type:String, required: true, max: 60},
        titulacao: {type: String, required: true, max: 60},
        salario: {type: Number, required: true, max: 40}
    }
)

var ProfessorModel = mongoose.model('professores', ProfessorSchema);

module.exports = ProfessorModel;