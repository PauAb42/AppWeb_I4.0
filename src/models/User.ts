import { Document, model, Schema, Types } from 'mongoose';

export interface IUser extends Document {
    id:Types.ObjectId;
    username: string;
    password: string;
    role: string;
    email: string;
    status: boolean; //Tres puntos a implementar siempre "estatus y fechas" 
    createDate: Date;
    deleteDate: Date;
}

const UserSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    },
    deleteDate: {
        type: Date,
        default: null
    }
});

export const User=model<IUser>("User", UserSchema, "user");