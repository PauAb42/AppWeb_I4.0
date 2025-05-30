import { Request, Response } from "express";
import { generateAccessToken } from "../utils/generateToken";
import { cache } from "../utils/cache";
import dayjs from "dayjs";
import { User } from "../models/User";
import bcrypt from 'bcrypt';



//IMPORTANTE
export const login = (req:Request, res:Response) => {
    //name:string asigno tipo de dato
    //name="Pau" asigno el valor
    let name: string = "Pau";

    const {username, password}=req.body;
     
    //Valida las credenciales (Si son correctas o no)
    if (username!=='Admin' || password!=='123456789'){
        return res.status(401)
        .json({message: "Credenciales Incorrectas"})
    }
    const userId = 'abc123';

    const accessToken = generateAccessToken(userId);

    cache.set(userId, accessToken, 60*15);

    return res.json({
        message: 'login',
        accessToken
    })  

}

export const getTime=(req:Request, res:Response)=>{
    const {userId} = req.params
    const ttl = cache.getTtl(userId);

    if (!ttl) {
        return res.status(404)
        .json({ message: "Token no encontrado"})
    }

    const now=Date.now();
    const timeToLifeSeconds=Math.floor((ttl-now)/1000);
    const expTime=dayjs(ttl).format('HH:mm:ss');

    return res.json({
        timeToLifeSeconds,
        expTime
    }

    )
}

export const updateTime = (req: Request, res: Response) =>{
    const { userId } = req.body;

    const ttl = cache.getTtl(userId);
    if (!ttl) {
        return res.status(404).json({ message: 'Token no encontrado o expirado'});
    }

    
    
    const nuevaTTLsegundos = 60 * 15;
    cache.ttl(userId, nuevaTTLsegundos);

    res.json("Actualizado con éxito");
}

export const getAllUsers = async (req: Request, res: Response) => {
    const userList= await User.find() //Buscar todos los registros
    //const userList= await User.find({status:false}) //Buscar todos los registros activos
    
    return res.json({ userList })
}

//Tarea Endpoint
export const getUserName = async (req:Request,res:Response) => {
    try{
        const { username } = req.params;
        const user = await User.findOne({ username});

        if (!user){
            return res.status(404).json({ message:'Usuario no encontrado'});
        }
        res.json(user);
    }catch (error){
        res.status(500).json({ message:'Error al buscar el usuario', error});
    }
};


export const createUser = async (req:Request, res:Response) => {
    try {
        const { username, password, email, role } = req.body;

        // Encriptar la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            email,
            status: true
        });

        const user = await newUser.save();
        return res.json({ user });

    } catch (error) {
        console.log("Error ocurrido en createUser: ", error);
        return res.status(426).json({ error });
    }
};
