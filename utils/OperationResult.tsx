import { FormError } from "./forms/formError";

export type OperationResult<T extends FormError = FormError> = {
  /* Indicates if the operation was successful */
  ok: boolean;

  error?: T;
  /** Any inner exception that emerged during the operation  */
  inner?: any;
};
