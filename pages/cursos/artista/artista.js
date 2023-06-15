import Pagina from "@/components/Pagina";
import apiArts from "@/service/apiArt";
import React, { useState, useEffect } from "react";
import { Table, Form, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

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
                <a href={`/obras/${item.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
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
            <tr>
              <td>{item.id}</td>
              <td>
                <a href={item.Informacao}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
                </a>
                <AiOutlineDelete
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
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
