import { Router } from 'express'
import { matchedData } from 'express-validator/filter'
import {Request, Response} from 'express'
import { validationResult } from 'express-validator/check'
import { userRules } from '../rules/user.rules'
import { UserService } from '../services/user.service'
import { IUser } from '../types/user'
import { codeStatus } from '../contants/codeStatus'

export const userRouter = Router()
const userService = new UserService()

userRouter.post('/register', userRules['forRegister'], (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(codeStatus.BAD_REQUEST).json(errors.array())

    const payload = matchedData(req) as IUser

    const user = userService.register(payload)

    return user.then(u => res.status(codeStatus.CREATED).json({
        u,
        sucess: true
    }))
})

userRouter.post('/login', userRules['forLogin'], (req: Request, res: Response) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(codeStatus.BAD_REQUEST).json(errors.array())

    const payload = matchedData(req) as IUser
    const response = userService.login(payload)

    return response.then(r => res.status(codeStatus.SUCCESS).json(r))
})
