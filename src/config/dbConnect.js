import mongoose, {mongo} from "mongoose";

async function conectaBD(){
    mongoose.connect(process.env.STRING_CONEXAO_DB);
    return mongoose.connection;
};

export default conectaBD;