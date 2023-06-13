import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Badge from 'react-bootstrap/Badge';
import Accordion from 'react-bootstrap/Accordion';

function CanteenMealCard(props){
    let styleOfTitle = {minHeight: '4rem'}
    if (props.meal.name.length > 59) {
        styleOfTitle = {minHeight: '4rem', fontSize: '13pt'};
    }
    let styleOfCard = {width: '25rem', textAlign: 'left', margin: 'auto', shadow: 'none'};
    if (props.highlight && props.highlight.active === true && (
        (props.highlight.category === "pork" && props.meal.meatCategory === "Schwein") ||
        (props.highlight.category === "vegetarian" && props.meal.meatCategory === "vegetarisch") ||
        (props.highlight.category === "vegan" && props.meal.meatCategory === "vegan")
        )) {
        console.log("highlight "+ props.meal.name + " with " + props.highlight.color + " because of " + props.highlight.category);
        styleOfCard = {width: '25rem', textAlign: 'left', margin: 'auto', shadow: 'none', border: 'solid', borderColor: props.highlight.color};
    };
    return(
        <Col>
            <Card bg="light" className="mb-3" style={styleOfCard}>
                <Card.Body>
                    <Card.Title style={styleOfTitle}>{props.meal.name}</Card.Title>
                    <Badge bg="success" style={{ fontSize: '1rem' }}>{props.meal.meatCategory}</Badge>
                    <Badge bg="secondary" style={{ fontSize: '1rem', float: 'right' }}>{props.meal.price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR'})}</Badge>
                    <hr/>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Zusatzinformationen</Accordion.Header>
                            <Accordion.Body>
                                Zusatzstoffe:<br/>{props.meal.additives.map((additive) => <Badge bg="secondary" style={{marginRight: '.1rem'}}>{additive}</Badge>)}{' '}<hr/>
                                Allergene:<br/>{props.meal.allergens.map((allergen) => <Badge bg="secondary" style={{marginRight: '.1rem'}}>{allergen}</Badge>)}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Card.Body>
            </Card>
        </Col>
    )
}
export default CanteenMealCard;