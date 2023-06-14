import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useAuth0 } from '@auth0/auth0-react';
import { baseUrlUser } from '../../config';

function CalendarSettings(props) {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();
    
    return(
        <>
        <h1>Kalender-Einstellungen</h1>

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Darstellung</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                Format: 
                </Col>
                <Col md="9">
                <Form.Check disabled type="radio" name="hourFormatRadioGroup" label="24 Stunden" defaultChecked />
                <Form.Check disabled type="radio" name="hourFormatRadioGroup" label="12 Stunden" />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                Standard Ansicht: 
                </Col>
                <Col md="9">
                <Form.Select disabled>
                    <option>Tag</option>
                    <option>Arbeitswoche</option>
                    <option>Woche</option>
                    <option>Monat</option>
                    <option>Liste</option>
                </Form.Select>
                </Col>
            </Row>
        </Container>

        <hr className="mx-3 my-5" />

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>RAPLA Kalender</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                RAPLA Link: 
                </Col>
                <Container>
                    <Row>
                        <Col md="8">
                        
                        </Col>
                    </Row>
                </Container>
                <Col md="8">
                <Form.Control id="calendarLink" type="link" placeholder="https://rapla.dhbw-karlsruhe.de/..."
                defaultValue={props.dbUser.calendarLink}
                />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                <Button variant="primary" className="mx-1" id="saveButton" onClick={()=>handleSave(props.dbUser, props.auth0User, isAuthenticated, getAccessTokenSilently)}>Speichern</Button>
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

    //validate if calendarLink is valid
    newDbUser.calendarLink = document.getElementById('calendarLink').value;

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

export default CalendarSettings;