import Pagina from "@/components/Pagina";
import Error from "next/error";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const index = () => {
  const {
    register,
    handleSubmit /*Colocando mensagem de erro na validacao formState:{errors}*/,
  } = useForm();

  function salvar(dados) {
    const artesdoartista =
      JSON.parse(window.localStorage.getItem("artesdoartista")) || [];
    artesdoartista.push(dados);
    window.localStorage.setItem(
      "artesdoartista",
      JSON.stringify(artesdoartista)
    );
    console.log(dados);
  }

  return (
    <Pagina titulo="Nova Arte">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quadro">
          <Form.Label>Link Quadro:</Form.Label>
          <Form.Control type="text" {...register("quadro")} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit(salvar)}>
          Salvar
        </Button>{" "}
        <Button variant="dark" href="/cursos/tiposdeartes/artesdoartista">
          Volta
        </Button>
      </Form>
    </Pagina>
  );
};

export default index;
