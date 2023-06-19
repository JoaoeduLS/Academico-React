import Cabecalho from "@/components/Cabecalho";
import Pagina from "@/components/Pagina";
import apiArts from "@/service/apiArt";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const index = ({ artes }) => {
  return (
    <Pagina titulo="Bem-Vindo ao leiloArt">
      <Row className="flex gap-5 justify-content-md-center" md={4}>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://cdn.pixabay.com/photo/2015/12/15/05/43/starry-night-1093721_960_720.jpg"
            style={{ width: "16.5rem" }}
          />
          <Card.Body>
            <Card.Title>A Noite Estrelada</Card.Title>
            <Button
              variant="dark"
              href="https://pt.wikipedia.org/wiki/A_Noite_Estrelada"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://static.todamateria.com.br/upload/ac/ri/a-criacao-de-adao-og.jpg"
            style={{ width: "16.5rem", height: "10.4rem" }}
          />
          <Card.Body>
            <Card.Title>A criação de Adão</Card.Title>

            <Button
              variant="dark"
              href="https://www.todamateria.com.br/a-criacao-de-adao-michelangelo/"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/originals/d9/36/4f/d9364f7e18f174251010645ae8ad6e2c.png"
            style={{ width: "16.5rem", height: "10.4rem" }}
          />
          <Card.Body>
            <Card.Title>A Última Ceia</Card.Title>
            <Button
              variant="dark"
              href="https://www.todamateria.com.br/a-ultima-ceia-de-leonardo-da-vinci/"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Card.Img
            variant="top"
            src="https://arteeartistas.com.br/wp-content/uploads/2016/09/Tarde-de-Domingo-na-Ilha-da-Grande-Jatte-Georges-Seurat-1884-1886-%E2%80%93-Instituto-de-Arte-de-Chicago.jpg"
            style={{ width: "16.5rem", height: "10.4rem" }}
          />
          <Card.Body>
            <Card.Title>
              Uma Tarde de Domingo na Ilha de Grande Jatte
            </Card.Title>
            <Button
              variant="dark"
              href="https://pt.wikipedia.org/wiki/Uma_Tarde_de_Domingo_na_Ilha_de_Grande_Jatte"
            >
              Ler mais
            </Button>
          </Card.Body>
        </Card>
      </Row>
      <br></br>
      <br></br>
      <Row style={{ height: "50vh" }}>
        <Col
          md={12}
          className="d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "#800000",
            borderRadius: "20px",
            border: "3px solid black",
            color: "white",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div>
            <h2>
              Gostaria de colocar sua arte em nosso site? Aperte em{" "}
              <strong>Cadastrar</strong> para nos informar mais:
            </h2>
            <p>
              Estamos emocionados em anunciar que estamos organizando um leilão
              de arte incrível e gostaríamos de convidar todos vocês a
              participarem deste evento especial. Queremos tornar este leilão
              verdadeiramente memorável, reunindo obras de arte talentosas e
              únicas. E, falando em obras de arte, temos o prazer de convidar
              os(as) artistas a fazer parte deste leilão excepcional.
              Adoraríamos exibir e leiloar uma de suas impressionantes criações.
            </p>
            <Button href="/cursos/form" variant="dark" size="lg">
              Cadastrar
            </Button>
          </div>
        </Col>
      </Row>
      <br></br>
      <br></br>
      <br></br>
      <Row
        md={"auto"}
        className="justify-content-center"
        style={{
          backgroundColor: "#800000",
          borderRadius: "20px",
          border: "3px solid black",
          color: "white",
          boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1>Vem pro leilao</h1>
      </Row>
      <br></br>
      <br></br>
      <Row>
        {artes.map((item) => (
          <Col key={item.id} style={{ marginBottom: "1rem" }}>
            <Card
              style={{
                width: "18rem",
                boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                margin: "0 auto", // Centraliza o card horizontalmente
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Card.Img
                variant="top"
                src={`https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`}
                style={{ width: "18rem", height: "12.6rem" }}
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Button variant="dark" href={`/cursos/Leilao/${item.id}`}>
                  Leilão
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
export async function getServerSideProps(context) {
  const resultado = await apiArts.get(`/artworks`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // will be passed to the page component as props
  };
}
