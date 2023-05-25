import Cabecalho from "@/components/Cabecalho";
import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Card, Row } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="Bem-Vindo ao leiloArt">
      <Row className="flex gap-5 justify-content-md-center" md={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/12/15/05/43/starry-night-1093721_960_720.jpg"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>A Noite Estrelada</Card.Title>
            <Card.Text>
              A Noite Estrelada é uma pintura de Vincent van Gogh de 1889. A
              obra retrata a vista da janela de um quarto do hospício de
              Saint-Rémy-de-Provence, pouco antes do nascer do sol, com a adição
              de um vilarejo idealizado pelo artista.
            </Card.Text>
            <Button
              variant="primary"
              href="https://pt.wikipedia.org/wiki/A_Noite_Estrelada"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://static.todamateria.com.br/upload/ac/ri/a-criacao-de-adao-og.jpg"
            style={{ width: "16.5rem", height: "10.4rem" }}
          />
          <Card.Body>
            <Card.Title>A criação de Adão</Card.Title>
            <Card.Text>
              A obra renascentista intitulada A criação de Adão foi feita por
              volta de 1511 pelo famoso artista italiano Michelangelo.Esse é um
              trabalho realizado com a técnica do afresco e integra o conjunto
              de pinturas feitas no Teto da Capela Sistina, produzidas entre
              1508 e 1512 por encomenda do papa Júlio II.
            </Card.Text>
            <Button
              variant="primary"
              href="https://www.todamateria.com.br/a-criacao-de-adao-michelangelo/"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/d9/36/4f/d9364f7e18f174251010645ae8ad6e2c.png"
            style={{ width: "16.5rem", height: "10.4rem" }}
          />
          <Card.Body>
            <Card.Title>A Última Ceia</Card.Title>
            <Card.Text>
              A Última Ceia (em italiano: L'Ultima Cena e também Il Cenacolo) é
              um afresco de Leonardo da Vinci para a igreja de Santa Maria delle
              Grazie em Milão, Itália. O trabalho presume-se que tenha sido
              iniciado por volta de 1495-96 e foi encomendado como parte de um
              plano de reformas na igreja e nos seus edifícios conventuais pelo
              patrono de Leonardo, Ludovico Sforza, duque de Milão.
            </Card.Text>
            <Button variant="primary"> Ler mais</Button>
          </Card.Body>
        </Card>
      </Row>
    </Pagina>
  );
};

export default index;
