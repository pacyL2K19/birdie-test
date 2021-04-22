import * as Sequelize from "sequelize";
import { sequelize } from "../instances/sequelize";
import { IVisit } from "../types/visit";

enum EventType {
    MOOD = "mood_observation",
    HEALTH = "health_check",
    SLEEP = "sleep"
}

export interface VisitModel extends Sequelize.Model<VisitModel, IVisit> {
    id: string,
    date: string,
    careGiverId: string,
    careRecipientId: string,
    notes: string,
    eventType: EventType
}

export const Visit = sequelize.define<VisitModel, IVisit>('visit', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    care_giver_id: Sequelize.STRING,
    care_recipient_id: Sequelize.STRING,
    date: Sequelize.STRING,
    event_type: Sequelize.STRING,
    note: Sequelize.STRING
}, {
    timestamps: false
})
