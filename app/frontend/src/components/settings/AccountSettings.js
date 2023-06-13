import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { useAuth0 } from '@auth0/auth0-react';
import { baseUrlUser } from '../../config';

function AccountSettings(props) {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();

    return(
        <>
        <h1>Account Einstellungen</h1>
        
        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                <Card className="text-center" style={{width: "30rem"}}>
                    <Card.Header className="text-center">
                        <Card.Title>User</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Image src={props.auth0User.picture} className="mb-2" style={{maxWidth: "15rem", maxHeight: "auto"}} roundedCircle />
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Anzeigename</InputGroup.Text>
                                <Form.Control
                                id='displayName'
                                defaultValue={props.dbUser.displayName}
                                />
                            </InputGroup>
                            </ListGroup.Item>
                            <ListGroup.Item>{props.auth0User.email}</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" className="mx-1" id="saveButton" onClick={()=>handleSave(props.dbUser, props.auth0User, isAuthenticated, getAccessTokenSilently)}>Speichern</Button>
                    </Card.Body>
                </Card>
                </Col>

            </Row>
           
        </Container>
        </>
    );
}

function handleSave(newDbUser, auth0User, isAuthenticated, getAccessTokenSilently) {
    console.log("Speichern");
    newDbUser.id = auth0User.sub;
    newDbUser.nickname = auth0User.nickname;
    newDbUser.email = auth0User.email;
    newDbUser.displayName = document.getElementById('displayName').value;

    //console.log("newDbUser", newDbUser);
    if (!isAuthenticated) {
        return;
    }
    (async () => {
    let token = await getAccessTokenSilently();
    const response = await fetch(baseUrlUser+'/user/', {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDbUser)
    });
    //console.log("response", response);
    })();
}

export default AccountSettings;