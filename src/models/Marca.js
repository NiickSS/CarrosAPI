import mongoose from "mongoose";

const marcaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    nacionalidade: {type: String},
}, {versionKey: false});

const marca = mongoose.model("marcas", marcaSchema);

export {marca, marcaSchema};
