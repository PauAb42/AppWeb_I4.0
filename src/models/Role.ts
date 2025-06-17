import { Document, model, Schema, Types } from 'mongoose';

export interface IRole extends Document {
    id: Types.ObjectId;
    name: string;
    type: string;
    status: boolean;
}

const RoleSchema = new Schema<IRole>({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    }
});

export const Role = model<IRole>("Role", RoleSchema, "role");