import {
  readMessages,
  sendMessage,
  deleteMessage
} from '../controllers/messageController.js'
import { validateMessage } from '../middleware/expressValidator.js'
import express from 'express'
const router = express.Router()

router.route('/').post(validateMessage, sendMessage).get(readMessages)
router.delete('/:msgId', deleteMessage)

export default router
