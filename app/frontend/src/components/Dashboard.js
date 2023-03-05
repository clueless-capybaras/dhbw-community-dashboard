import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import DashboardCard from "./DashboardCard";

import book from '../svg/book.svg';
import calendar from '../icons/ICON_Calendar_deselected.svg';
import canteen from '../icons/ICON_Canteen_deselected.svg';
import dualis from '../icons/ICON_Dualis_deselected.svg';
import links from '../icons/ICON_Links_deselected.svg';
import news from '../icons/ICON_News_deselected.svg';
import contact from '../icons/ICON_Contact_deselected.svg';
import settings from '../icons/ICON_Settings_deselected.svg'

function Dashboard(props) {
    return (
        <Container> {/* First Idea for good-looking dashboard, but not yet responsive */}
            <Row>
                {/*<DashboardCard title='Moodle'   icon={book} external={true} path='https://moodle.dhbw.de'/>*/}
                <DashboardCard colWidth={props.colWidth} title='Kalender'    icon={calendar} external={false} path='../calendar'/>
                <DashboardCard colWidth={props.colWidth} title='Mensa'    icon={canteen} external={false} path='../canteen/default'/>
                <DashboardCard colWidth={props.colWidth} title='Dualis'  icon={dualis} external={false} path='../dualis'/>
                <DashboardCard colWidth={props.colWidth} title='Links'    icon={links} external={false} path='../links'/>
                <DashboardCard colWidth={props.colWidth} title='News'    icon={news} external={false} path='../news'/>
                <DashboardCard colWidth={props.colWidth} title='Kontakt'    icon={contact} external={false} path='../contact'/>
                <DashboardCard colWidth={props.colWidth} title='Einstellungen'    icon={settings} external={false} path='../settings'/>
            </Row>
        </Container>
    );
}
export default Dashboard;