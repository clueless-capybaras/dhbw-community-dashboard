import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Spinner from 'react-bootstrap/Spinner';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useAuth0 } from "@auth0/auth0-react";

import {CanteenHttpClientContext} from '../../App';
import CanteenMealCard from "./CanteenMealCard";

function Canteen(){
    const { user, isAuthenticated, getAccessTokenSilently} = useAuth0();
    const { whichCanteen } = useParams();
    const navigate = useNavigate();
    const canteens = [
        {title: "Mensa Erzbergerstraße", key: "mensa-erzbergerstrasse"},
        {title: "Mensa am Adenauerring", key: "mensa-am-adenauerring"},
        {title: "Mensa Moltke", key: "mensa-moltke"}
    ];
    let canteen = (whichCanteen === 'default') ? canteens[0] : canteens.find(canteenIt => canteenIt.key === whichCanteen);

    // managing the menu
    const canteenHttpClient = useContext(CanteenHttpClientContext);
    const [dailyMenus, setDailyMenus] = useState(null);
    const [settings, setSettings] = useState(null);
    useEffect(() => {
        setDailyMenus(null);
        canteenHttpClient.getCanteenSettings(isAuthenticated, getAccessTokenSilently).then((s) => {
            setSettings(s);
            if(isAuthenticated && s && s.canteenStandardCanteen && s.canteenStandardCanteen !== canteen.key){
                navigate('/canteen/'+s.canteenStandardCanteen);
            }
            canteenHttpClient.getWeeklyMenuOfCanteen(canteen.key).then((dm) => setDailyMenus(dm));
        });
    }, [canteen.key, canteenHttpClient, whichCanteen]);
    const weekdayReference = new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });


    return(
        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <h1>Mensa</h1>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end">
                    <DropdownButton id="dropdown-basic-button" title={canteen.title}>
                        {canteens.map((canteenIt) => <Dropdown.Item key={canteenIt.key} onClick={()=> navigate('/canteen/'+canteenIt.key)}>{canteenIt.title}</Dropdown.Item>)}
                    </DropdownButton>
                </Col>
            </Row>
            <Row>
                {(dailyMenus)?
                    (<div>
                        <Col>
                            <Tabs defaultActiveKey={weekdayReference} id="fill-tab-example" className="mb-3" fill>
                                {dailyMenus.map((dailyMenu) => {
                                    const weekday = new Date(dailyMenu.day).toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'numeric', day: 'numeric' });
                                    return (<Tab eventKey={weekday} title={weekday}>
                                        <Row>
                                            {dailyMenu.options
                                            .filter((meal) => {
                                                if (!settings || !settings.canteenFilteringOption || settings.canteenFilteringOption === "all") return true;
                                                switch (settings.canteenFilteringOption) {
                                                    case "nopork":
                                                        return (meal.meatCategory !== "Schwein");
                                                    case "vegetarian":
                                                        return (meal.meatCategory === "vegetarisch" || meal.meatCategory === "vegan");
                                                    case "vegan":
                                                        return (meal.meatCategory === "vegan");
                                                    default:
                                                        return true;
                                                }
                                            })
                                            .map((meal) => <CanteenMealCard key={meal.name+"_"+weekday+"_"+Math.random()} meal={meal} highlight={
                                                {
                                                    "active": settings && settings.canteenHighlightingActive,
                                                    "color": settings?settings.canteenHighlightingColor:"",
                                                    "category": settings?settings.canteenHighlightingOption:""
                                                }
                                                } />)}
                                        </Row>
                                    </Tab>)
                                })}
                            </Tabs>
                        </Col>
                    </div>)
                    :(<Col className="d-flex justify-content-center">
                        <Spinner animation="border" role="status" />
                    </Col>)
                }
            </Row>
        </Container>
    )
}
export default Canteen;