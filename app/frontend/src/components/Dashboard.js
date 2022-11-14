import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import DashboardCard from "./DashboardCard";

import clip from '../svg/clipboard.svg';
import book from '../svg/book.svg';
import calendar from '../svg/calendar.svg';
import utensils from '../svg/utensils.svg';

function Dashboard() {
    return (
        <Container>
            <Row>
                <DashboardCard  title='Dualis'  icon={clip} external={true} path='https://dualis.dhbw.de'/>
                <DashboardCard title='Moodle'   icon={book} external={true} path='https://moodle.dhbw.de'/>
                <DashboardCard title='RAPLA'    icon={calendar} external={false} path='/calendar'/>
                <DashboardCard title='Mensa'    icon={utensils} external={false} path='/canteen'/>
            </Row>
        </Container>
    );
}
export default Dashboard;