import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";

const form = () => {
  return (
    <Pagina titulo="Formulario">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Label>Curso</Form.Label>
        <Form.Select id="disabledSelect">
          <option></option>
          <option>Culinaria</option>
          <option>Ciencia da Computacao</option>
          <option>Direito</option>
        </Form.Select>
        <br></br>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Pagina>
  );
};

export default form;
