import { check } from 'express-validator'

export const careRecipientRules = {
  forCreation: [
    check('names')
      .isString()
      .isLength({min: 3})
      .withMessage('Please enter a correct name'),
  ]
}
