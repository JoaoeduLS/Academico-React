import Pagina from "@/components/Pagina";
import apiArts from "@/service/apiArt";
import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useState } from "react";

const leilaodetodos = ({ artes }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredartes = artes.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearch = (evento) => {
    evento.prevenirPadrão();
    // Realize uma ação de pesquisa aqui, se necessário
    console.log("Termo de pesquisa:", searchTerm);
  };
  return (
    <Pagina titulo="Leilão">
      <Card border="danger" style={{ width: "18rem" }}>
        <Form className="d-flex" onSubmit={handleSearch}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-1"
            aria-label="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
            }}
          />
        </Form>
      </Card>
      <br></br>
      <br></br>
      <Row>
        {filteredartes.map((item) => (
          <Col key={item.id} style={{ marginBottom: "1rem" }}>
            <Card
              style={{
                width: "18rem",
                boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s ease",
                margin: "0 auto",
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

export default leilaodetodos;

export async function getServerSideProps(context) {
  const resultado = await apiArts.get(`/artworks?limit=100`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // will be passed to the page component as props
  };
}
