import { Router } from 'express'
import { matchedData } from 'express-validator/filter'
import {Request, Response} from 'express'
import { validationResult } from 'express-validator/check'
import { careRecipientRules } from '../rules/careRecipient.rules'
import { CareRecipientService } from '../services/careRecipient.service'
import { ICareRecipient } from '../types/careRecipient'
import { tokenGuard } from '../middlewares/token-guard';

export const careRecipientRouter = Router()
const careRecipientService = new CareRecipientService()

careRecipientRouter.post('/register/:first_familly_member', careRecipientRules['forCreation'], tokenGuard(), (req: Request, res: Response) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as ICareRecipient
    const params = {
        familly_members: req.params.first_familly_member
    }

    const visit = careRecipientService.register({
        ...payload,
        ...params
    })

    return visit.then(v => res.json(v))
})
