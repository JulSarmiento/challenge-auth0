const express = require('express');
const router = express.Router();
const httpStatus = require('http-status');

const productsRouter = require('./products.routes');
const authRoutes = require('./auth.routes');
const auth = require('../../utils/auth0');

router.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy',
    enviroment: process.env.ENVIROMENT,
    port: process.env.PORT
  });
})
  .use('/', auth)
  .use('/products', productsRouter)
  .use('/', (req, res) => {
    res.status(httpStatus.OK).json({
      status: 'OK',
      message: req.oidc.isAuthenticated() ? 'Authenticated' : 'Not Authenticated',
    });
  })
  .use('/', authRoutes)



module.exports = router;