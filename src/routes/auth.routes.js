const express = require('express');
const { requiresAuth } = require('express-openid-connect');
const router = express.Router();

// req.isAuthenticated is provided from the auth router
router.get('/profile', requiresAuth(), (req, res) => {
  const user = req.oidc.user ;
  res.send(JSON.stringify(user));
});

module.exports = router;