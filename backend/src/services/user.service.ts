import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as Bluebird from 'bluebird'
import * as dotenv from 'dotenv'
import { User } from '../models/user'
import { IUser } from '../types/user'
import { id } from '../common/createId'

export class UserService {
    constructor() {
        dotenv.config()
    }
    private readonly _saltRounds = 10
    private readonly _jwtSecret = process.env.SECRET || '0.rfyj3n9nzh'

    static get userAttributes() {
        return ['id', 'email']
    }
    private static _user: IUser
    static get user() {
        return UserService._user
    }

    async register({ email, password, names, phone, role, address }: IUser) {

        const hash = await bcrypt.hash(password, this._saltRounds)
        const u = await User.create({ email, password: hash, names, phone, role, address, id: id() })
        return await this.getUserById(u!.id)
    }

    async login({ email }: IUser) {
        const u = await User.findOne({ where: { email } })
        const { id } = u!
        return { token: jwt.sign({ id, email }, this._jwtSecret), user: u }
    }

    verifyToken(token: string) {
        return new Promise((resolve, _reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false)
                    return
                }

                const userFound: any = User.findByPk((<any>decoded).id)
                UserService._user = userFound
                resolve(true)
                return
            })
        }) as Promise<boolean>
    }

    getUserById(id: string) {
        return User.findByPk(id, {
            attributes: UserService.userAttributes
        }) as Bluebird<IUser>
    }
}
