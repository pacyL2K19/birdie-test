import * as Sequelize from 'sequelize';
import { sequelize } from "../instances/sequelize";
import { ICareRecipient } from '../types/careRecipient';

export interface CareRecipientModel extends Sequelize.Model<CareRecipientModel, ICareRecipient> {
    id: string,
    famillyMembers: string,
    visits: string
}

export const careRecipient = sequelize.define<CareRecipientModel, ICareRecipient>('careRecipient', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    famillyMembers: Sequelize.TEXT,
    visits: Sequelize.TEXT
}, {
    timestamps: false
})
