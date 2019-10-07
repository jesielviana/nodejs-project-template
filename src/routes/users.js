import express from 'express';
import UsersController from '../controllers/users';
import User from '../models/user';

const router = express.Router();

const usersController = new UsersController(User);

router.get('/', async (req, res) => {
  try {
    const users = await usersController.get();
    res.send(users);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/:id', async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await usersController.getById(id);
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/', async (req, res) => {
  try {
    await usersController.create(req.body);
    res.status(201).send('Sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await usersController.update(req.params.id, req.body);
    res.send('Sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await usersController.remove(req.params.id);
    res.send('Sucesso!');
  } catch (err) {
    res.status(400).send(err);
  }
});

export default router;
