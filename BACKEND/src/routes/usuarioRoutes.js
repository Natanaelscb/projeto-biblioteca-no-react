const express = require('express')
const router = express.Router();
const usuarioControlller = require('../controllers/usuarioController')

router.get('/', usuarioControlller.listar);
router.get('/:id', usuarioControlller.buscarPorId);
router.post('/', usuarioControlller.criar);
router.put('/:id', usuarioControlller.atualizar);
router.delete('/:id', usuarioControlller.deletar);

module.exports = router;