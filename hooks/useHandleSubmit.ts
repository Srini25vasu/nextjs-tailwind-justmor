import { useMemo } from "react";
import { FieldValues, UseFormHandleSubmit } from "react-hook-form";

export const useHandleSubmit = <TFieldValues extends FieldValues>(
  handleSubmit: UseFormHandleSubmit<TFieldValues>,
  ...args: Parameters<UseFormHandleSubmit<TFieldValues>>
) => {
  return useMemo(() => handleSubmit(...args), [args, handleSubmit]);
};
