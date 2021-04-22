import app from './application';
import * as dotenv from "dotenv";
import * as cors from 'cors'
import * as bodyParser from 'body-parser'
import { Request, Response, NextFunction } from 'express'
import { userRouter } from './routers/user.router'
import { tokenGuard } from './middlewares/token-guard'
import { visitRouter } from './routers/visit.routes';
dotenv.config();

const port = process.env.PORT || 8000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/users', userRouter)
app.use('/api/visits', visitRouter)

// Unprotected
app.get('/some-resource', (_req: Request, res: Response, _next: NextFunction) => {
    res.json('Test unproteced')
})
// app.post('/register')
app.use(tokenGuard())

// Protected
app.get('/some-protected-resource', (_req: Request, res: Response, _next: NextFunction) => {
    res.json('Test protected')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
