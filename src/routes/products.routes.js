const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/products.controller');
const connection = require('../../models/config');

connection();

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/',productsController.createProduct);

router.put('/:id', productsController.update);

router.delete('/:id', productsController.deleteById);

module.exports = router;