import express from 'express';
import morgan from 'morgan';
import authRoute from './routes/auth.routes';
import { connect } from 'http2';
import connectDBMongo from './config/db';

//Inicializar el servidor de express
const app = express();  //Creando un objeto para inicailazar

//Asignar el número de puerto 
const PORT= 3000; //Creando una variable para ponerle valor al puerto que se va a utilizar

app.use(express.json()) //Todo lo que reciba es tipo json
app.use(morgan('dev')); //Mostrar logs de las peticiones


app.use('/api/v1/auth', authRoute); //Ruta Principal

connectDBMongo().then(() => {
    app.listen(PORT, ()=> {
    console.log("El servidor está funcionando", PORT);
    });
});



