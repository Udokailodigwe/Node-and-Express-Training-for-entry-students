class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

//helper fn
const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

export { CustomAPIError, createCustomError };
