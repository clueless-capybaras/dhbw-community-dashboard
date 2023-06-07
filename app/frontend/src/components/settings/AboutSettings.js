import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from "react-bootstrap/ListGroup";
import Image from 'react-bootstrap/Image';

function AboutSettings(props) {
    return(
        <>
        <h1>Über</h1>
        
        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                <Card className="text-center" style={{width: "30rem"}}>
                    <Card.Header className="text-center">
                        <Card.Subtitle>developed by</Card.Subtitle>
                        <Card.Title><strong>capyclue.</strong></Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Image src={require("../../images/provisional_capy_logo.png")} className="mb-2" style={{maxWidth: "15rem", maxHeight: "auto"}} roundedCircle />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Leonid Ehrler</ListGroup.Item>
                            <ListGroup.Item>Tom Legel</ListGroup.Item>
                            <ListGroup.Item>Vanessa Limberger</ListGroup.Item>
                            <ListGroup.Item>Florian Pilz</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>

        <hr className="my-5 mx-3" />

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Links</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                <a target="_blank" rel="noreferrer" href="https://github.com/clueless-capybaras/dhbw-community-dashboard">GitHub</a>
                </Col>
                <Col>
                Wir verwenden GitHub als Repository für den gesamten Sourcecode und zur Dokumentation.
                </Col>

                <Col md="3">
                <a target="_blank" rel="noreferrer" href="http://capyclue.mush-it.com/">Worpress</a>
                </Col>
                <Col>
                Auf Worpress halten wir unsere größten Fans auf dem Laufenden.
                </Col>

                <Col md="3">
                <a target="_blank" rel="noreferrer" href="https://capyclue.atlassian.net/jira/software/projects/CAPY/boards/1">Jira</a>
                </Col>
                <Col>
                Jira ist unser Tool zum agilen Arbeiten im Sprint und zum Managen von Tasks und Bugs.
                </Col>
            </Row>
        </Container>

        <Container className="opacity-50 text-center">
            <Row className="my-5">
                <Col>
                &copy; capyclue. All rights reserved.
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default AboutSettings;