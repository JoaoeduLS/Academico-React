import Pagina from "@/components/Pagina";
import apiArts from "@/service/apiArt";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import {
  AiFillFileAdd,
  AiFillInfoCircle,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = ({ artes }) => {
  const [artistas, setCursos] = useState([]);
  useEffect(() => {
    setCursos(getAll());
  }, []);
  console.log(artistas);
  ///criando o apaga
  function getAll() {
    return JSON.parse(window.localStorage.getItem("artistas")) || [];
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArtes, setFilteredArtes] = useState(artes);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    filterArtes(event.target.value);
  };

  const filterArtes = (searchTerm) => {
    const filtered = artes.filter((item) => {
      const artistIdMatch =
        item.artist_id &&
        item.artist_id
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      const artistTitleMatch =
        item.artist_title &&
        item.artist_title.toLowerCase().includes(searchTerm.toLowerCase());
      return artistIdMatch || artistTitleMatch;
    });
    setFilteredArtes(filtered);
  };
  function excluir(id) {
    const artistas = getAll();
    artistas.splice(id, 1);
    window.localStorage.setItem(`artistas`, JSON.stringify(artistas));
    setCursos(artistas);
  }

  return (
    <Pagina titulo="Artistas">
      <Form.Group controlId="search">
        <Form.Control
          type="text"
          placeholder="Pesquisar artistas..."
          value={searchTerm}
          onChange={handleChange}
        />
      </Form.Group>
      <br></br>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Informacao</th>
            <th>Artista</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {filteredArtes.map((item) => (
            <tr key={item.artist_id}>
              <td>{item.artist_id || "ID Nao Encontrado"}</td>
              <td>
                <a href="/cursos/tiposdeartes/artesdoartista">
                  <AiFillFileAdd className="text-danger" />
                </a>
              </td>

              <td>{item.artist_title || "Artista Nao Encontrado"}</td>
              <td>{item.department_title}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <br></br>
      <h1>Artista Novos</h1>
      <br></br>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Informacao</th>
            <th>Artista</th>
            <th>Departamento</th>
          </tr>
        </thead>
        <tbody>
          {artistas.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>

              <td>
                <a href={item.Informacao}>
                  <AiFillInfoCircle className="text-danger" />
                </a>

                <AiOutlineDelete
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
                <Link href={"/cursos/artista/" + i}>
                  <BsFillPencilFill className="me-2 text-danger" />
                </Link>
              </td>

              <td>{item.Artista}</td>
              <td>{item.Departamento}</td>
            </tr>
          ))}
        </tbody>
      </Table>
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
              Gostaria de colocar seu artista favoritos Aperte em{" "}
              <strong>Cadastrar</strong>:
            </h2>
            <br></br>
            <div className="text-center">
              <Button href="/cursos/artista/form" variant="dark" size="lg">
                Cadastrar
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;

export async function getServerSideProps(context) {
  const resultado = await apiArts.get(`/artworks?limit=40`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // será passado para o componente de página como props
  };
}
