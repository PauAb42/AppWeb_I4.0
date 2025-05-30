import mongoose from "mongoose";

const connectDBMongo = async () : Promise<void> => {
    const mongoUri= "mongodb://localhost:27017/AppsI4";
    // Reemplazar "mongodb://<user>:<password>@<servidor>:<puerto>/<db>?authSource=admin"; mis las credenciales correctas
    // Reemplazar "mongodb://<servidor>:<puerto>/<db>" Esto es cuando no hya usuario y contraseña
    try {
        await mongoose.connect(mongoUri);
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.log("Error al conectar a MongoDB: ", error);
    }
}

export default connectDBMongo;