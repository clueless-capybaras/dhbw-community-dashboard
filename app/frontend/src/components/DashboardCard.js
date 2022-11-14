import { useNavigate } from 'react-router';

import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function DashboardCard(props) {
    const navigate = useNavigate();
    return (
        <Col m={4}>
            <Card bg='light' className='m-2 mt-3' style={{ width: '18rem', cursor: 'pointer' }} onClick={()=> (props.external)?window.open(props.path, props.title):navigate(props.path)}>
                <Card.Img style={{height: '5rem', margin: 'auto', marginTop: '2rem'}} variant="bottom" src={props.icon} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}
export default DashboardCard;