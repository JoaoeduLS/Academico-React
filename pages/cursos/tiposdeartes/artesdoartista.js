import Pagina from "@/components/Pagina";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { AiFillAlipayCircle, AiOutlineDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [artesdoartista, setCursos] = useState([]);
  useEffect(() => {
    setCursos(getAll());
  }, []);
  console.log(artesdoartista);
  ///criando o apaga
  function getAll() {
    return JSON.parse(window.localStorage.getItem("artesdoartista")) || [];
  }

  function excluir(id) {
    const artesdoartista = getAll();
    artesdoartista.splice(id, 1);
    window.localStorage.setItem(
      `artesdoartista`,
      JSON.stringify(artesdoartista)
    );
    setCursos(artesdoartista);
  }

  return (
    <Pagina titulo="Artes do Artista">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Delete</th>
            <th>Altera</th>
            <th>Nome do Quardo</th>
            <th>Arte do Artista</th>
          </tr>
        </thead>
        <tbody>
          {artesdoartista.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <AiOutlineDelete
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
              </td>
              <td>
                <Link href={"/cursos/tiposdeartes/" + i}>
                  <BsFillPencilFill className="me-2 text-danger" />
                </Link>
              </td>
              <td>{item.nome}</td>
              <td>
                <a href={item.quadro}>
                  <AiFillAlipayCircle className="text-danger" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button href="/cursos/tiposdeartes/form" variant="dark" size="lg">
        Cadastrar
      </Button>
    </Pagina>
  );
};

export default index;
