const express = require('express')
const UsersController = require('../controllers/users')
const User = require('../models/user')
const message = require('../utils/message.json')
const { body, validationResult } = require('express-validator')

const router = express.Router()

const usersController = new UsersController(User)

router.get('/', async (req, res) => {
  try {
    const users = await usersController.get()
    res.send(users)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.get('/:id', async (req, res) => {
  const {
    params: { id }
  } = req
  try {
    const user = await usersController.getById(id)
    res.send(user)
  } catch (err) {
    res.status(400).send(err)
  }
})

// name (min 3, max 50)
// email valido
// password (min 5, max 128)
router.post(
  '/',
  body('email').isEmail(),
  body('name').isLength({ min: 3 }),
  body('password').isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const { name, email, password } = req.body
      await usersController.create({ name, email, password })
      res.status(201).send(message.success.createUser)
    } catch (err) {
      res.status(400).send(err)
    }
  }
)

router.put('/:id', async (req, res) => {
  try {
    await usersController.update(req.params.id, req.body)
    res.send(message.success.editUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    await usersController.remove(req.params.id)
    res.send(message.success.removeUser)
  } catch (err) {
    res.status(400).send(err)
  }
})

module.exports = router
