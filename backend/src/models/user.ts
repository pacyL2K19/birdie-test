import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { IUser } from "../types/user";

export enum Roles {
    FAMILLY_MEMBER = "familly_member",
    CARE_GIVER = "care_giver",
    CARE_RECIPIENT = "care_recipient",
    ADMIN = "admin"
}

export interface UserModel extends Sequelize.Model<UserModel, IUser> {
    id: string,
    email: string,
    names: string,
    phone: number,
    role: string,
    password: string,
    address: string
}

export const User = sequelize.define<UserModel, IUser>('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    password: Sequelize.STRING,
    role: Sequelize.STRING,
    address: Sequelize.STRING,
    names: Sequelize.STRING,
    phone: Sequelize.INTEGER
}, {
    timestamps: false
})
