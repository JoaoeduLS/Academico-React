import Pagina from "@/components/Pagina";
import apiArts from "@/service/apiArt";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const leilaodetodos = ({ artes }) => {
  return (
    <Pagina titulo="Leilão">
      <Row>
        {artes.map((item) => (
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
                <Button variant="primary" href={`/cursos/id/${item.id}`}>
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
