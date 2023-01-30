function errorHandler(err, _req, res, _next) {
  if (err.name === 'UnauthorizedError') {
    // jwt authentication error
    return res.status(401).json({ message: 'Invalid Token' });
  }

  if (err.name === 'ValidationError') {
    // mongoose validation error
    return res.status(401).json({ message: err });
  }

  // default to 500 server error
  return res.status(500).json({ message: err.message });
}

module.exports = errorHandler;