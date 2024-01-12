import mongoose from "mongoose";
import { marcaSchema } from "./Marca.js";

const carroSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    modelo: {type: String, required: true},
    ano: {type: String},
    marca: marcaSchema
}, {versionKey: false});

const carro = mongoose.model("carros", carroSchema);

export default carro;