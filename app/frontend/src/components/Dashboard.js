import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import DashboardCard from "./DashboardCard";

import book from '../svg/book.svg';
import calendar from '/docs/icons/ICON_Calendar_deselected.svg';
import canteen from '/docs/icons/ICON_Canteen_deselected.svg';
import dualis from '/docs/icons/ICON_Dualis_deselected.svg';
import links from '/docs/icons/ICON_Links_deselected.svg';
import news from '/docs/icons/ICON_News_deselected.svg';
import contact from '/docs/icons/ICON_Contact_deselected.svg';
import settings from '/docs/icons/ICON_Settings_deselected.svg'

function Dashboard() {
    return (
        <Container>
            <Row>
                <DashboardCard title='Moodle'   icon={book} external={true} path='https://moodle.dhbw.de'/>
                <DashboardCard title='Kalender'    icon={calendar} external={false} path='/calendar'/>
                <DashboardCard title='Mensa'    icon={canteen} external={false} path='/canteen'/>
                <DashboardCard title='Dualis'  icon={dualis} external={true} path='https://dualis.dhbw.de'/>
                <DashboardCard title='Links'    icon={links} external={false} path='/links'/>
                <DashboardCard title='News'    icon={news} external={false} path='/news'/>
                <DashboardCard title='Kontakt'    icon={contact} external={false} path='/contact'/>
                <DashboardCard title='Einstellungen'    icon={settings} external={false} path='/settings'/>
            </Row>
        </Container>
    );
}
export default Dashboard;