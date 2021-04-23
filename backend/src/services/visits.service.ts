import * as Bluebird from 'bluebird'
import * as dotenv from 'dotenv'
import { Visit } from '../models/visits'
import { IVisit } from '../types/visit'
import { id } from '../common/createId'

export class VisitService {
    constructor() {
        dotenv.config()
    }
    static get visitAttributes() {
        return ['id', 'care_giver_id', 'care_recipient_id', 'event_type', 'date']
    }
    async createVisit({ care_giver_id, care_recipient_id, date, event_type, note }: IVisit) {
        const v_1 = await Visit.create({ care_giver_id, care_recipient_id, date, event_type, note, id: id() })
        return await this.showVisit(v_1!.id)
    }

    index() {
        return Visit.findAll({
            order: [
                ['date', 'DESC']
            ],
            attributes: VisitService.visitAttributes
        })
    }

    showVisit(id: string) {
        return Visit.findByPk(id, {
            attributes: VisitService.visitAttributes
        }) as Bluebird<IVisit>
    }
}