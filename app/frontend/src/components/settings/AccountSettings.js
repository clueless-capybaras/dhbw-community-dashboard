import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function AccountSettings(props) {

    return(
        <>
        <h1>Account Einstellungen</h1>
        
        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                <Card className="text-center" style={{maxWidth: "30rem"}}>
                    <Card.Header className="text-center">
                        <Card.Title>User</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Image src={require("../../images/christian-lindner.jpg")} className="mb-2" style={{maxWidth: "15rem", maxHeight: "auto"}} roundedCircle />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Christian Lindner</ListGroup.Item>
                            <ListGroup.Item>TINF21B4</ListGroup.Item>
                            <ListGroup.Item>lindner.christian.a21@student.dhbw-karlsruhe.de</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" className="mx-1">Ändern</Button>
                        <Button variant="danger" className="mx-1">Logout</Button>
                    </Card.Body>
                </Card>
                </Col>

            </Row>
           
        </Container>

        <hr className="my-5 mx-3" />

        <Container>
            <Row className="mb-3">
                <Col className="d-flex justify-content-center">
                <Card className="text-center" style={{width: "30rem"}}>
                    <Card.Header className="text-center">
                        <Card.Title>User</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Image src={require("../../images/christian-lindner.jpg")} className="mb-2" style={{maxWidth: "15rem", maxHeight: "auto"}} roundedCircle />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Christian Lindner</ListGroup.Item>
                            <ListGroup.Item>TINF21B4</ListGroup.Item>
                            <ListGroup.Item>lindner.christian.a21@student.dhbw-karlsruhe.de</ListGroup.Item>
                        </ListGroup>
                        <Button variant="primary" className="mx-1">Ändern</Button>
                        <Button variant="danger" className="mx-1">Löschen</Button>
                    </Card.Body>
                </Card>
                </Col>

            </Row>
           
        </Container>

        <hr className="my-5 mx-3" />

        <Container>
            <Row className="mb-3">
                <Col>
                <h2>Kurs</h2>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col md="3">
                
                </Col>
                <Col md="9">
                
                </Col>
            </Row>
        </Container>
        </>
    );
}

export default AccountSettings;