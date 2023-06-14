import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import apiArts from "@/service/apiArt";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useForm } from "react-hook-form";
import ContagemRegressiva from "@/components/ContagemRegressiva";

const index = ({ artes }) => {
  const { register, handleSubmit } = useForm();

  const [show, setShow] = useState(false);

  const [leilao, setLeilao] = useState([]);
  useEffect(() => {
    setLeilao(getAll());
  }, []);
  console.log(leilao);

  function getAll() {
    return JSON.parse(window.localStorage.getItem("[id]")) || [];
  }

  function salvar(dados) {
    const leilao = JSON.parse(window.localStorage.getItem("[id]")) || [];
    leilao.push(dados);
    window.localStorage.setItem("[id]", JSON.stringify(leilao));
    console.log(dados);
  }

  function refreshPage() {
    window.location.reload(); // Atualiza a página
  }

  const validatorNome = {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 10,
      message: "A quantidade de caracteres máxima é 10",
    },
  };

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

        <Col
          md={5} // Ajuste o valor de acordo com o tamanho desejado
          className="align-items-center justify-content-center"
        >
          <h3>Compradores</h3>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Numero</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {leilao.map((item, i) => (
                <tr>
                  <td>{i}</td>
                  <td>{item.number}</td>
                  <td>R${item.valor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>

        <Col
          md={3} // Ajuste o valor de acordo com o tamanho desejado
          className="align-items-center justify-content-center"
        >
          <Card>
            <br></br>
            <Form>
              <Form.Group className="mb-3" controlId="number">
                <Form.Label>Numero do Participante:</Form.Label>
                <Form.Control
                  type="number"
                  {...register("number", validatorNome)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="valor">
                <Form.Label>Valor:</Form.Label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">R$</span>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="0.00"
                    {...register("valor", validatorNome)}
                  />
                </div>
              </Form.Group>
              <Button variant="danger" onClick={handleSubmit(salvar)}>
                Salvar
              </Button>{" "}
              <Button onClick={refreshPage} variant="dark">
                Refresh
              </Button>
            </Form>
            <br></br>
          </Card>
          <br></br>
          <br></br>
          <ContagemRegressiva />
        </Col>
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
