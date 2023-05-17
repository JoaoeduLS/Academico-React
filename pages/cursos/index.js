import Pagina from "@/components/Pagina";
import React from "react";
import { Button, FormGroup, Table } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="Cursos">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>NOME</th>
            <th>DURACAO</th>
            <th>PRECO</th>
            <th>PROFESSOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Culinaria</td>
            <td>4 anos</td>
            <td>R$ 8.850,00</td>
            <td>Diogo</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Ciencia da Computacao</td>
            <td>4 anos</td>
            <td>R$ 4.850,00</td>
            <td>Hugo</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Direito</td>
            <td>8 anos</td>
            <td>R$ 12.850,00</td>
            <td>Rickelme</td>
          </tr>
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
