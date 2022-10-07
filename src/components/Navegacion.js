import React from "react";
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from "react-bootstrap"
import "../stylesheets/Navegacion.css"

function Navegacion() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <div className="container">
          <Container>
            <Nav className="me-auto">
              <div className="container tletra">
                <Link className="conatiner" to="/home">
                  Home
                </Link>
                <Link className="container" to="/contacto">
                  Contacto
                </Link>
              </div>
            </Nav>
          </Container>
          <Navbar.Brand>
            <img type="image/png" src="https://i.ibb.co/nm6hD4b/birthday-cake-cake-pngrepo-com.png" alt="CakeIcon" />
          </Navbar.Brand>
        </div>
      </Navbar>
    </div>
  );
}

export default Navegacion;