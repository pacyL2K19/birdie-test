import * as Bluebird from 'bluebird'
import { careRecipient } from '../models/careRecipient'
import { ICareRecipient } from '../types/careRecipient'
import { id } from '../common/createId'

export class CareRecipientService {
    static get careRecipientAttributes() {
        return ['id', 'familly_members', 'visits']
    }

    register({familly_members, visits}: ICareRecipient) {
        return careRecipient.create({familly_members, visits, id: id()})
            .then(cr => this.getCareRecipientByPk(cr!.id))
    }

    getCareRecipientByPk(id: string) {
        return careRecipient.findByPk(id, {
            attributes: CareRecipientService.careRecipientAttributes
        }) as Bluebird<ICareRecipient>
    }
}
