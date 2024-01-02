import mongoose, {mongo} from "mongoose";

async function conectaBD(){
    mongoose.connect("Inserir BD");
    return mongoose.connection;
};

export default conectaBD;