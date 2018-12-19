import express from 'express';
import UsuariosController from '../controllers/usuarios';
import Usuario from '../models/usuario';

const router = express.Router();
const usuariosController = new UsuariosController(Usuario);
router.get('/', (req, res) => usuariosController.get(req, res));
router.get('/:id', (req, res) => usuariosController.getById(req, res));
router.post('/', (req, res) => usuariosController.create(req, res));
router.put('/:id', (req, res) => usuariosController.update(req, res));
router.delete('/:id', (req, res) => usuariosController.remove(req, res));

export default router;
