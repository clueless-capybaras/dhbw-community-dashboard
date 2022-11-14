import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

function Navibar() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
              <FontAwesomeIcon icon={faGraduationCap} />
              {' '}
              DHBW Community Dashboard
            </Link> 
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
}
export default Navibar;