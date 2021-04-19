export interface IBasicUser {
    id: string
}

export interface IUser extends IBasicUser {
    names: string,
    phone: number,
    email?: string,
    role?: string,
    password?: string,
    address?: string
}
