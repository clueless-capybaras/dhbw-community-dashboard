import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

function CalendarSettings(props) {
    
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
                <Form.Check type="radio" name="hourFormatRadioGroup" label="24 Stunden" defaultChecked />
                <Form.Check type="radio" name="hourFormatRadioGroup" label="12 Stunden" />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                Standard Ansicht: 
                </Col>
                <Col md="9">
                <Form.Select>
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
                <h2>Kalender hinzufügen/entfernen</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                Kalender hinzufügen: 
                </Col>
                <Container>
                    <Row>
                        <Col md="8">
                        
                        </Col>
                    </Row>
                </Container>
                <Col md="8">
                <Form.Control type="link" placeholder="https://rapla.dhbw-karlsruhe.de/..." />
                </Col>
                <Col md="1">
                <Button type="button" onClick="">+</Button>
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default CalendarSettings;