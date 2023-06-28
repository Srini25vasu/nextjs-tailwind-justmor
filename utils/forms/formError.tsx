export enum CommonError {
  UnknownError = "UnknownError",
  SameEmail = "SameEmail",
  LinkCurrupt = "LinkCurrupt",
  NewPasswordMismatch = "NewPasswordMismatch",
}

export type FormError = CommonError;