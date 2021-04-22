import { check } from 'express-validator'

export const visitRules = {
  forCreation: [
    check('date')
      .isString()
      .isLength({min: 6})
      .withMessage('Please enter a correct date'),
    check('event_type')
      .isString()
      .isLength({ min: 3 })
      .withMessage('Invalid event type'),
    check('note')
      .isString()
      .withMessage('PLease enter a small overview of the visit')
  ]
}
