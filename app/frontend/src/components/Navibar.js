import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dashboard from "./Dashboard";

import logo from "../icons/LOGO_DHBWCD.svg";

import { Link } from 'react-router-dom';

function Navibar(props) {
    return (
        <Navbar key={false} bg="dark" variant="dark" expand={false} className="mb-3">
        <Stack direction="horizontal" gap={3}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} className="ms-2"/>
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
              className={props.cyClass}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body >
              <Dashboard colWidth='6'/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
              <img src={logo} alt="Logo" style={{height: '30px', width: '30px'}} className="d-inline-block align-top"/>
              {' '}
              DHBW Community Dashboard
            </Link> 
          </Navbar.Brand>
        </Stack>
      </Navbar>
    );
}
export default Navibar;