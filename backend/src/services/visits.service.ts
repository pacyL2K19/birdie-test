// import * as bcrypt from 'bcrypt'
import * as Bluebird from 'bluebird'
import * as dotenv from 'dotenv'
import { Visit } from '../models/visits'
import { IVisit } from '../types/visit'

export class VisitService {
    constructor () {
        dotenv.config()
    }
    static get visitAttributes() {
        return ['id', 'visit_id', 'care_giver_id', 'care_recipient_id', 'event_type']
    }
    createVisit({careGiverId, careRecipientId, date, eventType, note}: IVisit) {
        const id =  () => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            });
        }
        return Visit.create({careGiverId, careRecipientId, date, eventType, note, id: id() })
            .then(v => this.showVisit(v!.id))
    }

    showVisit (id: string) {
        return Visit.findByPk(id, {
            attributes: VisitService.visitAttributes
        }) as Bluebird<IVisit>
    }

    getAllVisits () {

    }
}