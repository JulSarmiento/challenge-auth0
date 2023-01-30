const express = require('express');
const router = express.Router();

const ProductController = require('../../controllers/products.controller');

// Get all
router.get('/', ProductController.getAll);

// Get by Id
router.get('/:id', ProductController.getById);

// Create
router.post('/', ProductController.create);

// Update by id
router.put('/:id', ProductController.update);

// Delete all
router.delete('/:id', ProductController.delete);

// Delete by id
router.delete('/:id', ProductController.deleteById);

module.exports = router;