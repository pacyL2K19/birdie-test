import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import * as Bluebird from 'bluebird'
import * as dotenv from 'dotenv'
import { User } from '../models/user'
import { IUser } from '../types/user'

export class UserService {
    constructor () {
        dotenv.config()
    }
    private readonly _saltRounds = process.env.GEN_SALT || 10
    private readonly _jwtSecret = process.env.SECRET || '0.rfyj3n9nzh'

    static get userAttributes() {
        return ['id', 'email']
    }
    private static _user: IUser
    static get user() {
        return UserService._user
    }

    register({ email, password, names, phone, role, address }: IUser) {
        return bcrypt.hash(password, this._saltRounds)
            .then(hash => {
                const id =  () => {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                      return v.toString(16);
                    });
                }
                return User.create({ email, password: hash, names, phone, role, address, id: id() })
                    .then(u => this.getUserById(u!.id))
            })
    }

    login({ email }: IUser) {
        return User.findOne({ where: { email } }).then(u => {
            const { id, email } = u!
            return { token: jwt.sign({ id, email }, this._jwtSecret) }
        })
    }

    verifyToken(token: string) {
        return new Promise((resolve, _reject) => {
            jwt.verify(token, this._jwtSecret, (err, decoded) => {
                if (err) {
                    resolve(false)
                    return
                }

                UserService._user = User.findByPk(decoded['id'])
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
