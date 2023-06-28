import { FormEventHandler, ReactNode } from "react";
import { FormIconType } from "./FormIcon";

export interface JusMehrFormProps {
  formTitle: string;
  formSubTitle: string;
  icon?: FormIconType;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  id: string;
}

export const JusMehrForm = ({
  formTitle,
  formSubTitle,
  icon,
  onSubmit,
  children,
  id,
}: JusMehrFormProps): JSX.Element => {
  return <div>Srini</div>;
};
