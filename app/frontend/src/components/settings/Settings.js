import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';

import AccountSettings from './AccountSettings';
import CalendarSettings from './CalendarSettings';
import CanteenSettings from './CanteenSettings';
import GeneralSettings from './GeneralSettings';
import AboutSettings from './AboutSettings';

function Settings() {
    return(
        <>
        <Tab.Container defaultActiveKey="account">
            <Row>
                <Col md="3">
                {/* left navigation bar */}
                <h1>Einstellungen</h1>

                <Nav variant="pills" className="flex-column">
                    <Nav.Link eventKey="account">Account</Nav.Link>
                    <Nav.Link eventKey="calendar">Kalender</Nav.Link>
                    <Nav.Link eventKey="canteen">Mensa</Nav.Link>
                    <Nav.Link eventKey="general">Allgemein</Nav.Link>
                    <Nav.Link eventKey="about">Über</Nav.Link>
                </Nav>
                
                </Col>

                <Col md="9">
                {/* contents of different settings pages */}
                <Tab.Content>
                    <Tab.Pane eventKey="account">
                        <AccountSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="calendar">
                        <CalendarSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="canteen">
                        <CanteenSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="general">
                        <GeneralSettings />
                    </Tab.Pane>
                    <Tab.Pane eventKey="about">
                        <AboutSettings />
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    );
}

export default Settings;