const ProfessorModel = require('../models/professor.model');


class ProfessorService{


    static listar(req, res){
        ProfessorModel.find().then(
            (professores) => {
                res.status(201).json(professores);
            }
        )
    }

    static registrar(req, res){
        ProfessorModel.create(req.body).then(
            (professor) =>{
                res.status(201).json(professor);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
                console.log("Erro Interno");
            }
        )
    }

    
    static editar(req, res){
        ProfessorModel.findById(req.params.id).then(
            (professor) =>{
                res.status(201).json(professor);
                console.log("Erro Interno")
            }
        ).catch(
            (error) =>{
                res.status(500).json(error);
                console.log("Erro Interno")
            }
        )
    }

    static recuperar(req, res){
        ProfessorModel.findById(req.params.id).then(
            (professor)=>{
                res.status(201).json(professor);
            }
        ).catch(
            (error) => {
                res.status(500).json(error);
                console.log("Erro Interno")
            }
        )
    }

    static apagar(req,res){
        ProfessorModel.findByIdAndRemove(req.params.id).then(
            (professor)=>{
                res.status(201).json(professor);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
                console.log("Erro Interno")
                
            }
        );
    }

    static recuperarPorLogin(req,res){
        ProfessorModel.find({'login':req.params.login}).then(
            (professor)=>{
                res.status(201).json(professor);
            }
        ).catch(
            (error)=>{
                res.status(500).json(error);
                console.log("Erro Interno")
                
            }
        );
    }



}

module.exports = ProfessorService