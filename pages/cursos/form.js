import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <Pagina titulo="Formulario">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Numero</Form.Label>
          <Form.Control type="text" {...register("Numero")} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" {...register("Email")} />
        </Form.Group>
        <Form.Label>Curso</Form.Label>
        <Form.Select id="disabledSelect" {...register("Curso")}>
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
