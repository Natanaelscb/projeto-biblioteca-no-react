const express = require('express')
const router = express.Router();
const livrosControlller = require('../controllers/livroController')

router.get('/', livrosControlller.listar);
router.post('/', livrosControlller.criar);

module.exports = router;