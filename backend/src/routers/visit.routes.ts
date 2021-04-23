import { Request, Response, Router } from 'express'
import { matchedData } from 'express-validator/filter'
import { validationResult } from 'express-validator/check'
import { visitRules } from '../rules/visits.rules'
import { VisitService } from '../services/visits.service'
import { IVisit } from '../types/visit'
import { tokenGuard } from '../middlewares/token-guard'
import { codeStatus } from '../contants/codeStatus'

export const visitRouter = Router()
const visitService = new VisitService()

visitRouter.post('/create/:care_giver_id/:care_recipient_id', visitRules['forCreation'], tokenGuard(), (req: Request, res: Response) => {
    const errors = validationResult(req)
    
    if (!errors.isEmpty())
        return res.status(codeStatus.BAD_REQUEST).json(errors.array())

    const payload = matchedData(req) as IVisit
    const params = {
        care_giver_id: req.params.care_giver_id || '',
        care_recipient_id: req.params.care_recipient_id
    }

    const visit = visitService.createVisit({
        ...payload,
        ...params
    })

    return visit.then(v => res.status(codeStatus.CREATED).json(v))
})

visitRouter.get('/', tokenGuard(), (_req: Request, res: Response) => {
    return visitService.index().then(v => {
        res.status(codeStatus.SUCCESS).json(v)
    })
})
