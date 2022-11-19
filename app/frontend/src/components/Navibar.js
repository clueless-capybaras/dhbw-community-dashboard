import Stack from 'react-bootstrap/Stack';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dashboard from "./Dashboard";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navibar() {
    return (
        <Navbar key={false} bg="dark" variant="dark" expand={false} className="mb-3">
        <Stack direction="horizontal" gap={3}>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} className="ms-2"/>
          <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Dashboard/>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <Navbar.Brand>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
              <FontAwesomeIcon icon={faGraduationCap} />
              {' '}
              DHBW Community Dashboard
            </Link> 
          </Navbar.Brand>
        </Stack>
      </Navbar>
    );
}
export default Navibar;