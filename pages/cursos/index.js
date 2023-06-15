import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";

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
    <Pagina titulo="Novos Desenhos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Del</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Estilo</th>
            <th>Arte</th>
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
              <td>{item.Modalidade}</td>
              <td>
                <BiCopy
                  onClick={() => {
                    navigator.clipboard.writeText(item.imagemId);
                    alert("ID da imagem copiado para a área de transferência!");
                  }}
                  className="text-danger"
                  style={{ cursor: "pointer", marginLeft: "0.5rem" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br></br>
      <Button href="/cursos/form" variant="dark">
        Inscreva-se
      </Button>{" "}
    </Pagina>
  );
};

export default index;
