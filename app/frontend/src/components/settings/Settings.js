import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { baseUrlUser } from '../../config';

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
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [userData, setUserData] = useState({});
    useEffect(() => {
        if (!isAuthenticated) {
            return;
        }
        (async () => {
        let token = await getAccessTokenSilently();
        const response = await fetch(baseUrlUser+'/user/', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        let data = await response.json();
        setUserData(data);
        })();
    }, [getAccessTokenSilently, isAuthenticated]);


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
                    <Nav.Link eventKey="about">Über</Nav.Link>
                </Nav>
                
                </Col>

                <Col>
                {/* contents of different settings pages */}
                <Tab.Content>
                    <Tab.Pane eventKey="account">
                        <AccountSettings user={user} userData={userData} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="calendar">
                        <CalendarSettings user={user} userData={userData} />
                    </Tab.Pane>
                    <Tab.Pane eventKey="canteen">
                        <CanteenSettings user={user} userData={userData} />
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