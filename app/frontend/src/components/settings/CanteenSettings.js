import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function CanteenSettings(props) {

    const [standardCanteen, setStandardCanteen] = useState(props.userData.canteenStandardCanteen);
    const handleStandardCanteenChange = event => {
        setStandardCanteen(event.target.value);
        props.userData.canteenStandardCanteen = standardCanteen;
    }
    
    const [highlightingCheck, setHighlightingCheck] = useState(props.userData.canteenHighlightingActive);
    const handleHighlightingCheckChange = event => {
        setHighlightingCheck(!highlightingCheck);
        props.userData.canteenHighlightingActive = highlightingCheck;
    }
    
    const [highlightingColor, setHighlightingColor] = useState(props.userData.canteenHighlightingColor);
    const handleHighlightingColorChange = event => {
        setHighlightingColor(event.target.value);
        props.userData.canteenHighlightingColor = highlightingColor;
    }

    const [highlightingOption, setHighlightingOption] = useState(props.userData.canteenHighlightingOption);
    const handleHighlightingOptionChange = event => {
        setHighlightingOption(event.target.value);
        props.userData.canteenHighlightingOption = highlightingOption;
    }
    
        const [mealShowCheck, setMealShowCheck] = useState(true);
    
        const handleMealShowCheckChange = event => {
            setMealShowCheck(!mealShowCheck);
    
        }

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
                <Form.Select defaultValue={standardCanteen} onChange={handleStandardCanteenChange}>
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
                <Form.Check type="checkbox" defaultChecked={highlightingCheck} onChange={handleHighlightingCheckChange} aria-label="activate Highlighting" />
                </Col>
            </Row>

            {/* Show following Options only when Checkbox is checked */}
            { highlightingCheck ?

            <>
            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Farbe: </Form.Label>
                </Col>
                <Col>
                <Form.Control type="color" defaultValue={highlightingColor} title="Color Picker" id="highlightingColorPicker" onChange={handleHighlightingColorChange} />
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md="3">
                <Form.Label>Highlighting-Typen: </Form.Label>
                </Col>
                <Col>
                <Form.Select defaultValue={highlightingOption} onChange={handleHighlightingOptionChange}>
                    <option value="vegetarisch">vegetarisch</option>
                    <option value="vegan">vegan</option>
                    <option value="schweinefleisch">Schweinefleisch</option>
                </Form.Select>
                </Col>
            </Row>
            </>
            
            : null}

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
                <Form.Label>Gerichte anzeigen mit Eigenschaft:</Form.Label>
                </Col>
                <Col>
                <Form.Check type="checkbox" label="vegetarisch" defaultChecked={props.userData.canteenShowVegetarian ? true : false} onChange={handleMealShowCheckChange} />
                <Form.Check type="checkbox" label="vegan" defaultChecked={props.userData.canteenShowVegan ? true : false} onChange={handleMealShowCheckChange} />
                <Form.Check type="checkbox" label="Schweinefleisch" defaultChecked={props.userData.canteenShowPork ? true : false} onChange={handleMealShowCheckChange} />
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default CanteenSettings;