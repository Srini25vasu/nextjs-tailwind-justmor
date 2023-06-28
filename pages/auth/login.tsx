import { LoginForm } from "@/components/forms/LoginForm";
import { OperationResult } from "@/utils/OperationResult";

const Login = (): JSX.Element => {
  return (
    <LoginForm
      onResponse={function (result: OperationResult): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};

export default Login;
