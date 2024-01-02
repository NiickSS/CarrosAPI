import mongoose, {mongo} from "mongoose";

async function conectaBD(){
    mongoose.connect("coloque a conexão aqui");
    return mongoose.connection;
};

export default conectaBD;