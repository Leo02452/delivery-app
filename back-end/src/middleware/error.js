const errorMiddleware = (err, _req, res, _next) => {
    switch (err.name) {
      case 'NotFoundError':
        return res.status(404).json({ message: err.message });
      case 'ZodError':
        return res.status(400).json({ message: err.message });
      case 'ConflictError':
        return res.status(409).json({ message: err.message });
      default:
        return res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = errorMiddleware;