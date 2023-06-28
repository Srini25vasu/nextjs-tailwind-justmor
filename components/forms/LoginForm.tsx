import { OperationResult } from "@/utils/OperationResult";
import { JusMehrForm } from "./JusMehrForm";
import { useState } from "react";
import { FormError } from "@/utils/forms/formError";
import { useForm } from "react-hook-form";
import { useHandleSubmit } from "@/hooks/useHandleSubmit";
import { FORM_ID_PREFIX } from "@/constants/PREFIXES";

type FormFields = {
  email: string;
  password: string;
};

const defaultValues: FormFields = {
  email: "",
  password: "",
};

interface LoginFormProps {
  onResponse: (result: OperationResult) => void;
}

export const LoginForm = ({ onResponse }: LoginFormProps): JSX.Element => {
  const [formError, setFormError] = useState<FormError>();
  const methods = useForm<FormFields>({ defaultValues });
  const { handleSubmit } = methods;
  const handleFormSubmit = useHandleSubmit(handleSubmit, []);
  return (
    <div>Srini login</div>
   /*  <JusMehrForm
      formTitle="Login"
      formSubTitle="Login to your JusMore account"
      onSubmit={handleFormSubmit}
      id={FORM_ID_PREFIX + "login"}
    >
        <fieldset>
            <Textfiled label="E-Mail Addres" name="email" required />
        </fieldset>
    </JusMehrForm> */
  );
};
