const express = require('express');
const router = express.Router();

const productsRouter = require('./products.routes');

router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy',
    enviroment: process.env.ENVIROMENT,
    port: process.env.PORT
  });
}).use('/products', productsRouter)


module.exports = router;