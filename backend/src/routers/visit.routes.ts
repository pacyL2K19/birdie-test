import { Router } from 'express'
import { matchedData } from 'express-validator/filter'
import {Request, Response} from 'express'
import { validationResult } from 'express-validator/check'
import { visitRules } from '../rules/visits.rules'
import { VisitService } from '../services/visits.service'
import { IVisit } from '../types/visit'

export const visitRouter = Router()
const visitService = new VisitService()

visitRouter.post('/create/:care_giver_id/:care_recipient_id', visitRules['forCreation'], (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as IVisit
    const params = {
        careGiverId: req.params.care_giver_id || '',
        careRecipientId: req.params.care_recipient_id
    }

    const visit = visitService.createVisit({
        ...payload,
        ...params
    })

    console.log(visit);

    return visit.then(v => res.json(v))
})
