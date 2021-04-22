import * as Sequelize from 'sequelize';
import { sequelize } from "../instances/sequelize";
import { ICareRecipient } from '../types/careRecipient';

export interface CareRecipientModel extends Sequelize.Model<CareRecipientModel, ICareRecipient> {
    id: string,
    familly_members: string,
    visits: string,
    names: string
}

export const care_recipients = sequelize.define<CareRecipientModel, ICareRecipient>('care_recipients', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true
    },
    familly_members: Sequelize.TEXT,
    visits: Sequelize.TEXT,
    names: Sequelize.TEXT
}, {
    timestamps: false
})
