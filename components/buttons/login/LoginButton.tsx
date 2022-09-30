import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-tailwind/react';

export interface ILoginButton {
  text: string;
}

const LoginButton: React.FC<ILoginButton> = ({ text }) => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      className="capitalize"
      size="sm"
      onClick={() => loginWithRedirect()}
    >
      {text}
    </Button>
  );
};

export default LoginButton;
