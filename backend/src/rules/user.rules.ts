import * as bcrypt from 'bcrypt'
import { check } from 'express-validator'
import { User } from '../models/user'

export const userRules = {
  forRegister: [
    check('email')
      .isEmail()
      .withMessage('Invalid email format')
      .custom(email => User.findOne({ where: { email } }).then(u => !!!u))
      .withMessage('Email exists')
      .optional(),
    check('password')
      .isLength({ min: 8 })
      .withMessage('Invalid password'),
    check('confirmPassword')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword)
      .withMessage('Passwords are different'),
    check('role')
      .isString()
      .withMessage('Enter a valid role'),
    check('names')
      .isString()
      .optional()
      .isLength({ min: 3, max: 100 })
      .withMessage('Enter a valid name'),
    check('address')
      .isString()
      .optional(),
    check('phone')
      .isNumeric()
      .isLength({ max: 10 })
      .withMessage('Enter a valid phone number')
  ],
  forLogin: [
    check('email')
      .isEmail()
      .withMessage('Invalid email format')
      .custom(email => User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
    check('password')
      .custom((password, { req }) => {
        return User.findOne({ where: { email: req.body.email } })
          .then(u => bcrypt.compare(password, u!.password))
      })
      .withMessage('Invalid email or password')
  ]
}
