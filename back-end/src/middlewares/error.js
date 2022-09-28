const errorMiddleware = (err, _req, res, _next) => {
    switch (err.name) {
      case 'ZodError':
        return res.status(400).json({
          message: `${err.issues[0].path[0]}: ${err.issues[0].message}`,
        });
      case 'UnauthorizedError':
        return res.status(401).json({ message: err.message });
      case 'NotFoundError':
        return res.status(404).json({ message: err.message });
      case 'ConflictError':
        return res.status(409).json({ message: err.message });
      default:
        return res.status(500).json({ message: err.message });
    }
  };
  
  module.exports = errorMiddleware;