const express = require('express')
const router = express.Router();
const emprestimoController = require('../controllers/emprestimoController')

router.get('/', emprestimoController.listar);
/* router.get('/:id', emprestimoControlller.buscarPorId); */
/* router.post('/', emprestimoControlller.criar); */
/* router.put('/:id', emprestimoControlller.atualizar);
router.delete('/:id', emprestimoControlller.deletar); */

module.exports = router;