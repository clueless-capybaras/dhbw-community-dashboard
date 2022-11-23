import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from 'react-bootstrap/Badge';

function CanteenMealCard(props){
    return(
        <Col>
            <Card bg="light" className="mb-3" style={{ width: '25rem', height: '25rem', textAlign: 'left'}}>
            <Card.Body>
                <Card.Title>{props.meal.name}</Card.Title>
                <Card.Text>
                    <br/><Badge bg="secondary">{props.meal.meatCategory}</Badge><hr/>
                    Zusatzstoffe:<br/>{props.meal.additives.map((additive) => <Badge bg="secondary">{additive}</Badge>)}<hr/>
                    Allergene:<br/>{props.meal.allergens.map((allergen) => <Badge bg="secondary">{allergen}</Badge>)}<hr/>
                    Preis:<br/><Badge bg="secondary">{props.meal.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</Badge>
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
    )
}
export default CanteenMealCard;