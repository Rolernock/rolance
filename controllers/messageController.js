import { validationResult } from 'express-validator'
import MessageModel from '../models/MessageModel.js'

// @route - POST - api/message
// @desc - send message
export const sendMessage = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })
  try {
    const { name, phone, email, message } = req.body
    const msgInfo = { name, phone, email, message }
    MessageModel.create(msgInfo)
    return res.json({ msg: 'Message sent!' })
  } catch (err) {
    const msg = err.message
    return res.status(500).json({ errors: [{ msg }] })
  }
}

// @route - GET - api/message
// @desc - read messages
export const readMessages = async (req, res) => {
  const messages = await MessageModel.find()
  if (!messages) return res.status(404).json({ msg: 'No messages found!' })
  return res.json(messages)
}

//@route - DELETE - api/message/:msgId
//@desc - Delete message
export const deleteMessage = async (req, res) => {
  const { msgId } = req.params
  const message = await MessageModel.findById(msgId)
  if (!message) return res.status(404).json({ msg: 'Message not found!' })
  await MessageModel.findByIdAndDelete(msgId)
  return res.json({ msg: 'Message deleted!' })
}
