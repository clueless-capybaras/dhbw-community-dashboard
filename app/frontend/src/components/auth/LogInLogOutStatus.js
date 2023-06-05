import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';
import Nav from 'react-bootstrap/Nav';

function LogInLogOutStatus() {
    const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
    return (
        (isAuthenticated) ? 
        (
            <>
                <Nav.Link style={{marginRight: '1em', cursor: 'default'}}>{user.nickname}</Nav.Link>
                <Button variant='danger' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</Button>
            </>
        ):(
            <Button variant='primary' onClick={() => loginWithRedirect()}>Log In</Button>
        )
        
    );
}
export default LogInLogOutStatus;