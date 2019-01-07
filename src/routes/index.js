import express from 'express';
import usuariosRoute from './users';

const router = express.Router();

router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

export default router;
