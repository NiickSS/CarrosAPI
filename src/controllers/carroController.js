import carro from "../models/Carro.js";
import {marca} from "../models/Marca.js";

class CarroController {

    static async listarCarros(req,res){
        try{
            const listaCarros = await carro.find({});
            res.status(200).json(listaCarros);
        } catch(erro){
            res.status(500).json({message: `${message.erro} - falha na requisicao!`});
        }
    };

    static async listarCarrosPorId(req, res){
        try{
            const id = req.params.id;
            const carroEncontrado = await carro.findById(id);
            res.status(200).json(carroEncontrado);
        } catch(erro){
            res.status(500).json({message: `${message.erro} - falha na requisicao do carro!`})
        }
    };

    static async cadastrarCarro(req, res){
        const novoCarro = req.body;
        try{
            const carroEncontrado = await carro.findById(novoCarro.carro);
            const carroCompleto = {...novoCarro, marca: {...marcaEncontrada._doc}};
            const carroCriado = await carro.create(carroCompleto);
            res.status(201).json({message: "criado com sucesso!"});
        } catch(erro){
            res.status(500).json({message: `${message.erro} - falha ao cadastrar carro!`});
        }
    };

    static async atualizarCarro(req,res){
        try{
            const id = req.params.id;
            await carro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "atualizado com sucesso!"});
        } catch(erro){
            res.status(500).json({message: `${message.erro} - falha ao atualizar carro!`});
        }
    };

    static async excluirCarro(req,res){
        try{
            const id = req.params.id;
            await carro.findByIdAndDelete(id);
            res.status(200).json({message: "excluido com sucesso!"});
        } catch(erro){
            res.status(500).json({message: `${message.erro} - falha ao excluir carro!`});
        }
    };

    static async listarCarrosPorMarca(req,res){
        const marca = req.query.marca;
        try{
            const carrosPorMarca = await carro.find({ marca: marca});
            res.status(200).json(carrosPorMarca);
        } catch(erro){
            res.status(500).json({message: `${erro.message} - falha na busca`});
        }
    };
};

export default CarroController;