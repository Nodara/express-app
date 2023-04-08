// eslint-disable-next-line no-unused-vars
const errorHandlerMiddleware = (error, req, res, next) => {
  const { code, message } = error;

  return res.status(code).json({ message: message });
};

module.exports = errorHandlerMiddleware;