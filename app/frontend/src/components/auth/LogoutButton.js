import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
    const { logout } = useAuth0();
    return (
        <Button variant='danger' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
    );
}
export default LogoutButton;