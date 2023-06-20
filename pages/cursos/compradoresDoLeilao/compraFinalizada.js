import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button, FormGroup, Table } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";

const index = () => {
  const [compraFinalizada, setCursos] = useState([]);
  useEffect(() => {
    setCursos(getAll());
  }, []);
  console.log(compraFinalizada);
  ///criando o apaga
  function getAll() {
    return JSON.parse(window.localStorage.getItem("compraFinalizada")) || [];
  }

  function excluir(id) {
    const compraFinalizada = getAll();
    compraFinalizada.splice(id, 1);
    window.localStorage.setItem(
      `compraFinalizada`,
      JSON.stringify(compraFinalizada)
    );
    setCursos(compraFinalizada);
  }
  ///
  return (
    <Pagina titulo="Compradores">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Del</th>
            <th>Altera</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
            <th>CEP</th>
            <th>Cidade</th>
            <th>Número do cartão</th>
            <th>Quantidade de produtos</th>
            <th>Nome do quadro</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {compraFinalizada.map((item, i) => (
            <tr key={i}>
              <td>{i}</td>
              <td>
                <AiOutlineDelete
                  onClick={() => excluir(i)}
                  className="text-danger"
                />
              </td>
              <td>
                <Link href={"/cursos/compradoresDoLeilao/" + i}>
                  <BsFillPencilFill className="me-2 text-danger" />
                </Link>
              </td>
              <td>{item.nome}</td>
              <td>{item.Numero}</td>
              <td>{item.Email}</td>
              <td>{item.CPF}</td>
              <td>{item.CEP}</td>
              <td>{item.Cidade}</td>
              <td>{item.Númerodocartão}</td>
              <td>{item.Quantidadedeprodutos}</td>
              <td>{item.Nomedoquadro}</td>
              <th>{item.Valor}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
