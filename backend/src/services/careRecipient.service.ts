import * as Bluebird from 'bluebird'
import { care_recipients } from '../models/careRecipient'
import { ICareRecipient } from '../types/careRecipient'
import { id } from '../common/createId'

export class CareRecipientService {
    static get careRecipientAttributes() {
        return ['id', 'familly_members', 'visits', 'names']
    }

    async register({ familly_members, names }: ICareRecipient) {
        const cr = await care_recipients.create({ familly_members, names, id: id() })
        return await this.getCareRecipientByPk(cr!.id)
    }

    getCareRecipientByPk(id: string) {
        return care_recipients.findByPk(id, {
            attributes: CareRecipientService.careRecipientAttributes
        }) as Bluebird<ICareRecipient>
    }
}
