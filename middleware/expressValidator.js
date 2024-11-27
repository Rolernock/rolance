import { check } from 'express-validator'

export const validateMessage = [
  check('name', 'Name is required').notEmpty(),
  check('phone', 'Phone Number is required').notEmpty(),
  check('email', 'Email is required').isEmail().normalizeEmail(),
  check('message', 'Message is required').notEmpty()
]
