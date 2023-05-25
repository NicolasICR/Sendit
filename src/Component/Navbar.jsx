import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = ({ handleOptionChange }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" onClick={() => handleOptionChange('list')}>Lista de Personas</Nav.Link>
            <Nav.Link href="#" onClick={() => handleOptionChange('add')}>Agregar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

/*import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Barra() {
  const [activeTab, setActiveTab] = useState('');

  const handleNavItemClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href=""
              active={activeTab === 'Lista de personas'}
              onClick={() => handleNavItemClick('Lista de personas')}
            >
              Lista de personas
            </Nav.Link>
            <Nav.Link
              href="./Component/Form"
              active={activeTab === 'Agregar'}
              onClick={() => handleNavItemClick('Agregar')}
            >
              Agregar
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;*/