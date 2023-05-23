import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";

const index = () => {
  const [cursos, setCursos] = useState([]);
  useEffect(() => {
    setCursos(getAll());
  }, []);
  console.log(cursos);
  ///criando o apaga
  function getAll() {
    return JSON.parse(window.localStorage.getItem("cursos")) || [];
  }

  function excluir(id) {
    const cursos = getAll();
    cursos.splice(id, 1);
    window.localStorage.setItem(`cursos`, JSON.stringify(cursos));
    setCursos(cursos);
  }
  ///
  return (
    <Pagina titulo="Cursos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Del</th>
            <th>NOME</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Curso</th>
            <th>Modalidade</th>
          </tr>
        </thead>
        <tbody>
          {cursos.map((item, i) => (
            <tr>
              <td>{i}</td>
              <td>
                <AiOutlineDelete
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.Numero}</td>
              <td>{item.Email}</td>
              <td>{item.Curso}</td>
              <td>{item.Modadelida}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Button href="/cursos/form" variant="primary">
        Inscreva-se
      </Button>{" "}
    </Pagina>
  );
};

export default index;
