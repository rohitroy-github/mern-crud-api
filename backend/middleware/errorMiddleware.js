// middlewareToOverwriteDefaultExpressErrorHandler

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  res.status(statusCode);

  //   sendErrorStack&ErrorMessage
  res.json({
    message: err.message,
    // sendStackOnlyInProductionCase
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
