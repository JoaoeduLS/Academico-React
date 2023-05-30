import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Cabecalho = () => {
  return (
    <div>
      <Navbar variant="dark" collapseOnSelect expand="lg" bg="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand href="/">LeiloArt</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/cursos">Cadastrados</Nav.Link>
              <Nav.Link href="/leilaodetodos">Leilão</Nav.Link>
              <Nav.Link href="">Alunos</Nav.Link>
              <Nav.Link href="">Salas</Nav.Link>
              <Nav.Link href="">Semestre</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cabecalho;
