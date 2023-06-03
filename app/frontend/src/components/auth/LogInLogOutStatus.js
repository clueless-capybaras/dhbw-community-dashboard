import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

function LogInLogOutStatus() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        (isAuthenticated) ? 
        (
            <>
                <p>Eingeloggt als {user.nickname}</p>
                <Button variant='danger' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
            </>
        ):(
            <Button variant='primary' onClick={() => loginWithRedirect()}>Log In</Button>
        )
        
    );
}
export default LogInLogOutStatus;