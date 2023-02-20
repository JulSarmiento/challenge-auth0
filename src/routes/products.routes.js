const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/products.controller');
const connection = require('../../models/config');
const { auth } = require('express-openid-connect');

connection();

router.get('/',  productsController.getAll);

router.get('/:id', (req, res, next) => {
  if (req.oidc.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
  }, productsController.getById);

router.post('/', (req, res, next) => {
  if (req.oidc.isAuthenticated()) {
    next();
  } else {
    res.redirect('/login');
  }
  }, productsController.createProduct);

router.put('/:id', (req, res, next) => {
    if (req.oidc.isAuthenticated() ) {
      next();
    } else {
      res.redirect('/login');
    }
  }, productsController.update);

router.delete('/:id', 
  (req, res, next) => {
    if (req.oidc.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  } ,productsController.deleteById);

module.exports = router;