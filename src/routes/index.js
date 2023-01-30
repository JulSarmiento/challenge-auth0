const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is healthy',
    enviroment: process.env.ENVIROMENT,
    port: process.env.PORT
  });
})


module.exports = router;