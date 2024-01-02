import mongoose, {mongo} from "mongoose";

async function conectaBD(){
    mongoose.connect("mongodb+srv://root:TestandoAPIDeCarros@cluster0.kapodod.mongodb.net/?retryWrites=true&w=majority");
    return mongoose.connection;
};

export default conectaBD;