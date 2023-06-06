import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import apiArts from "@/service/apiArt";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const index = ({ artes }) => {
  const [show, setShow] = useState(false);

  return (
    <Pagina titulo={artes.title}>
      <Row>
        {["Danger"].map((variant) => (
          <Card
            bg={variant.toLowerCase()}
            key={variant}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{
              width: "20rem",
              boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
            }}
            className="mb-2"
          >
            <Card.Body>
              <Card.Img
                src={`https://www.artic.edu/iiif/2/${artes.image_id}/full/843,/0/default.jpg`}
                style={{
                  border: "3px solid white",
                  borderRadius: "10px",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
              <br></br>
              <br></br>
              <Card.Title className="text-center">
                {variant} {artes.title}{" "}
              </Card.Title>
            </Card.Body>
            <Card style={{ color: "black" }}>
              <strong>Artista:</strong>

              <ul>
                <li> {artes.artist_display}</li>
              </ul>
              <strong>Origem:</strong>

              <ul>
                <li> {artes.place_of_origin}</li>
              </ul>
              <strong>Dimensão:</strong>

              <ul>
                <li> {artes.dimensions}</li>
              </ul>

              <strong>Data de criação:</strong>

              <ul>
                <li> {artes.date_display}</li>
              </ul>

              <Button variant="dark" onClick={() => setShow(true)}>
                Historia
              </Button>

              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  <Modal.Title id="example-custom-modal-styling-title">
                    Historia da {artes.title}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{artes.publication_history}</p>
                </Modal.Body>
              </Modal>
            </Card>
            <br></br>
          </Card>
        ))}
        <div className="col-md-6">
          <Col
            md={5} // Ajuste o valor de acordo com o tamanho desejado
            className="align-items-center justify-content-center"
          ></Col>
        </div>
      </Row>
    </Pagina>
  );
};

export default index;

export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiArts.get(`/artworks/${id}`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // will be passed to the page component as props
  };
}
