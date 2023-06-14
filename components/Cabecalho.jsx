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
          <img
            src="https://media.discordapp.net/attachments/954503804676603998/1112898469775036456/Design_sem_nome-removebg-preview_2.png?width=606&height=606"
            style={{ maxWidth: "60px" }}
          />{" "}
          <Navbar.Brand href="/">LeiloArt</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link href="/inicio">Inicio</Nav.Link>
              <Nav.Link href="/cursos">Cadastrados</Nav.Link>
              <Nav.Link href="/leilaodetodos">Leilão</Nav.Link>
              <Nav.Link href="/cursos/compradoresDoLeilao/compraFinalizada">
                Compradores
              </Nav.Link>
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
