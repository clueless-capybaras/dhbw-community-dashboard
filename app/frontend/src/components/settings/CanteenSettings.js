import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function CanteenSettings(props) {

    const [highlightingColor, setHighlightingColor] = useState("#3aac5c"); //Change the useState-Value to user's last saved settings

    const handleHighlightingColorChange = event => {
        setHighlightingColor(event.target.value);
        console.log(highlightingColor);
    }

    return(
        <>
        <h1>Mensa-Einstellungen</h1>

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Highlighting</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                <Form.Check className="" type="switch" id="" label="Highlighting aktivieren" />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Farbe: </Form.Label>
                </Col>
                <Col md="9">
                <Form.Control type="color" defaultValue={highlightingColor} title="Color Picker" id="highlightingColorPicker" onChange={handleHighlightingColorChange} />
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Typen: </Form.Label>
                </Col>
                <Col md="9">
                <Form.Select>
                    <option>vegetarisch</option>
                    <option>vegan</option>
                    <option>Schweinefleisch</option>
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
                <Form.Label>Gerichte ausblenden mit Eigenschaft:</Form.Label>
                </Col>
                <Col md="9">
                <Form.Check type="checkbox" label="vegetarisch" />
                <Form.Check type="checkbox" label="vegan" />
                <Form.Check type="checkbox" label="Schweinefleisch" />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default CanteenSettings;