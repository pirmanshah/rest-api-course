const AppError = require('@utils/AppError');

const errorController = (() => {
  const notFound = (request, response, next) => {
    next(new AppError(`Can't find ${request.originalUrl} on this server!`, 404));
  };

  const serverError = (error, request, response, next) => {
    error.statusCode = error.statusCode || 500;
    error.status = error.status || 'error';

    response.status(error.statusCode).json({
      status: error.status,
      message: error.message,
    });
  };

  return {
    notFound,
    serverError,
  };
})();

module.exports = errorController;
