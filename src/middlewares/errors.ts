import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import mongoose from "mongoose";
import configs from "../configs/configs";
import ApiError from "../utils/ApiError";

const errorConverter = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode =
      error.statusCode || error instanceof mongoose.Error
        ? httpStatus.BAD_REQUEST
        : httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(
      statusCode,
      message.toString(),
      false,
      err.stack?.toString()
    );
  }
  next(error);
};

const errorHandler = (
  err: any,
  req: Request,
  res: Response
) => {
  let { statusCode, message } = err;
  if (configs.ENV === "production" && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = {
    code: statusCode,
    message,
    ...(configs.ENV === "development" && { stack: err.stack }),
  };

  if (configs.ENV === "development") {
    console.error(err);
  }

  res.status(statusCode).send(response);
};

export { errorConverter, errorHandler };
