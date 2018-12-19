import express from 'express';
import usuariosRoute from './usuarios';

const router = express.Router();

router.use('/usuarios', usuariosRoute);
router.get('/', (req, res) => res.send('Hello World!'));

export default router;
