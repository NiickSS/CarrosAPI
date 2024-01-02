import {marca} from "../models/Marca.js";

class MarcaController {

    static async listarMarcas(req, res){
        try{
            const listaMarcas = await marca.find({});
            res.status(200).json(listaMarcas);
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisicao!`});
        }
    };

    static async listarMarcaPorId(req, res){
        try{
            const id = req.params.id;
            const marcaEncontrada = await marca.findById(id);
            res.status(200).json(marcaEncontrada);
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na requisicao da marca!`});
        }
    };

    static async cadastrarMarca(req,res){
        try{
            const novaMarca = await marca.create(req.body);
            res.status(201).json({message: "criado com sucesso", marca: novaMarca});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao cadastrar nova marca`});
        }
    };

    static async atualizarMarca(req,res){
        try{
            const id = req.params.id;
            await marca.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "marca atualizada"});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha ao atualziar marca!`});
        }
    };

    static async excluirMarca(req, res){
        try{
            const id = req.params.id;
            await marca.findByIdAndDelete(id);
            res.status(200).json({message: "marca excluida com sucesso!"});
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na exclusao!`});
        }
    };
};

export default MarcaController;