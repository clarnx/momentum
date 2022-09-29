import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@material-tailwind/react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      className="capitalize"
      size="sm"
      color="red"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
