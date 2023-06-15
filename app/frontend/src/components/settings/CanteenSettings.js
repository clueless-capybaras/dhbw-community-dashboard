import { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useAuth0 } from '@auth0/auth0-react';
import { baseUrlUser } from '../../config';
import Button from 'react-bootstrap/esm/Button';

function CanteenSettings(props) {
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [canteen, setCanteen] = useState(props.dbUser.canteenStandardCanteen || 'mensa-erzbergerstrasse');
    const handleCanteenChange = (e) => {
        setCanteen(e.target.value);
    };
    const [color, setColor] = useState(props.dbUser.canteenHighlightingColor || 'green');
    const handleColorChange = (e) => {
        setColor(e.target.value);
    };
    const [highlightingOption, setHighlightingOption] = useState(props.dbUser.canteenHighlightingOption || 'vegetarian');
    const handleHighlightingOptionChange = (e) => {
        setHighlightingOption(e.target.value);
    };
    const [filteringOption, setFilteringOption] = useState(props.dbUser.canteenFilteringOption || 'all');
    const handleFilteringOptionChange = (e) => {
        setFilteringOption(e.target.value);
    };
    useEffect(() => {
        setColor(props.dbUser.canteenHighlightingColor);
        setCanteen(props.dbUser.canteenStandardCanteen);
        setHighlightingOption(props.dbUser.canteenHighlightingOption);
        setFilteringOption(props.dbUser.canteenFilteringOption);
    }, [props.dbUser.canteenHighlightingColor, props.dbUser.canteenStandardCanteen, props.dbUser.canteenHighlightingOption, props.dbUser.canteenFilteringOption]);
   
    return(
        <>
        <h1>Mensa-Einstellungen</h1>

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Darstellung</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                Meine Mensa: 
                </Col>
                <Col>
                <Form.Select id="canteenStandardCanteen" value={canteen} onChange={handleCanteenChange}>
                    <option value="mensa-erzbergerstrasse">Mensa Erzbergerstraße</option>
                    <option value="mensa-am-adenauerring">Mensa am Adenauerring</option>
                    <option value="mensa-moltke">Mensa Moltke</option>
                </Form.Select>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting aktivieren: </Form.Label>
                </Col>
                <Col>
                <Form.Check defaultChecked={props.dbUser.canteenHighlightingActive} className="" type="checkbox" id="highlightingCheck" aria-label="activate Highlighting" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Farbe: </Form.Label>
                </Col>
                <Col>
                <Form.Control type="color" id="highlightingColorSelect" value={color} onChange={handleColorChange} />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Typen: </Form.Label>
                </Col>
                <Col>
                <Form.Select id="highlightingOptionSelect" value={highlightingOption} onChange={handleHighlightingOptionChange}>
                    <option value="vegetarian">vegetarisch</option>
                    <option value="vegan">vegan</option>
                    <option value="pork">Schweinefleisch</option>
                </Form.Select>
                </Col>
            </Row>

        </Container>

        <hr className="my-5 mx-3" />

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Ausblenden</h2>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Gerichte anzeigen mit Mindesteigenschaft:</Form.Label>
                </Col>
                <Col>
                <Form.Select id="filteringOptionSelect" value={filteringOption} onChange={handleFilteringOptionChange}>
                    <option value="all">Alle Anzeigen</option>
                    <option value="nopork">Kein Schweinefleisch</option>
                    <option value="vegetarian">vegetarisch</option>
                    <option value="vegan">vegan</option>
                </Form.Select>
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
    newDbUser.canteenStandardCanteen = document.getElementById("canteenStandardCanteen").value;
    newDbUser.canteenHighlightingActive = document.getElementById("highlightingCheck").checked;
    newDbUser.canteenHighlightingColor = document.getElementById("highlightingColorSelect").value;
    newDbUser.canteenHighlightingOption = document.getElementById("highlightingOptionSelect").value;
    newDbUser.canteenFilteringOption = document.getElementById("filteringOptionSelect").value;


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

export default CanteenSettings;