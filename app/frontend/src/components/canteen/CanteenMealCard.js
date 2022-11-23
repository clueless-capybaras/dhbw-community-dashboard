import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from 'react-bootstrap/Badge';

function CanteenMealCard(props){
    return(
        <Col>
            <Card bg="light" className="mb-3" style={{ width: '18rem', height: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.meal.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.meal.note}</Card.Subtitle>
                <Card.Text>
                    {props.meal.tags}€
                </Card.Text>
                <Badge bg="secondary">{props.meal.price} €</Badge>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default CanteenMealCard;