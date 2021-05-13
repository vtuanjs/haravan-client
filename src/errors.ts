export enum ErrorCode {
  ServerError = 500,
  AlreadyExistsError = 422,
  PermissionDeniedError = 403,
  NotFoundError = 404,
  UnauthorizedError = 401,
  ValidationError = 400
}

export enum ErrorMessage {
  ServerError = 'Server Error',
  AlreadyExistsError = 'Already Exists Error',
  PermissionDeniedError = 'Permission Denied Error',
  NotFoundError = 'Not Found Error',
  UnauthorizedError = 'Unauthorized Error',
  ValidationError = 'Validation Error'
}

export interface ErrorDetails {
  platform?: string;
  code?: number;
  message?: string;
  fields?: string[];
}

export class AppError extends Error {
  code: number;
  details?: ErrorDetails;

  constructor(code: number = ErrorCode.ServerError, message: string, details?: ErrorDetails) {
    super(message);
    this.code = code;
    this.details = details;
  }
}

export class ServerError extends AppError {
  constructor(message: string = ErrorMessage.ServerError, details?: ErrorDetails) {
    super(ErrorCode.ServerError, message, details);
  }
}

export class HaravanError extends ServerError {
  constructor(message = 'Haravan Unknown error', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.ServerError,
      message,
      ...details
    });
  }
}

export class HaravanInvalidArgError extends ServerError {
  constructor(message = 'Haravan Invalid arguments', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.ValidationError,
      message,
      ...details
    });
  }
}

export class HaravanUnauthorizedError extends ServerError {
  constructor(message = 'Haravan Unauthorized', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.UnauthorizedError,
      message,
      ...details
    });
  }
}

export class HaravanNotFoundError extends ServerError {
  constructor(message = 'Haravan Not found', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.NotFoundError,
      message,
      ...details
    });
  }
}

export class HaravanAlreadyExistsError extends ServerError {
  constructor(message = 'Haravan Already exists', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.AlreadyExistsError,
      message,
      ...details
    });
  }
}

export class HaravanPermissionDeniedError extends ServerError {
  constructor(message = 'Haravan Permission denied', details?: ErrorDetails) {
    super(undefined, {
      platform: 'haravan',
      code: ErrorCode.PermissionDeniedError,
      message,
      ...details
    });
  }
}
