import { Roles } from "../models/user";

export interface IBasicUser {
    id?: string
}

export interface IUser extends IBasicUser {
    names?: string,
    phone?: number,
    email: string,
    role?: Roles,
    password?: string,
    address?: string
}
