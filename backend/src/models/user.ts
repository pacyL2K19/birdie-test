// src/models/user.ts

import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { IUser } from "../types/user";

enum Roles {
    FAMILLY_MEMBER = "familly_member",
    CARE_GIVER = "care_giver",
    CARE_RECIPIENT = "care_recipient"
}

export interface UserModel extends Sequelize.Model<UserModel, IUser> {
    id: string,
    email: string,
    names: string,
    phone: number,
    role: Roles,
    password: string
    address: string
}

export const User = sequelize.define<UserModel, IUser>('user', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    address: Sequelize.STRING,
    names: Sequelize.STRING,
    phone: Sequelize.INTEGER
})
