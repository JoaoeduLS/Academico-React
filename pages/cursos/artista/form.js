import Pagina from "@/components/Pagina";
import Error from "next/error";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit /*Colocando mensagem de erro na validacao formState:{errors}*/,
  } = useForm();

  function salvar(dados) {
    const artistas = JSON.parse(window.localStorage.getItem("artistas")) || [];
    artistas.push(dados);
    window.localStorage.setItem("artistas", JSON.stringify(artistas));
    console.log(dados);
  }

  const validatorNome = {
    required: "O campo é obrigatório",
    minLength: {
      value: 7,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 2000,
      message: "A quantidade de caracteres máxima é 2000",
    },
  };

  return (
    <Pagina titulo="Novo artista">
      <Form>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" {...register("id", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Artista">
          <Form.Label>Artista:</Form.Label>
          <Form.Control type="text" {...register("Artista")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Departamento">
          <Form.Label>Departamento:</Form.Label>
          <Form.Control type="Email" {...register("Departamento")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Informacao">
          <Form.Label>Informacao do Artista:</Form.Label>
          <Form.Control type="text" {...register("Informacao")} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit(salvar)}>
          Salvar
        </Button>{" "}
        <Button variant="dark" href="/cursos/artista/artista">
          Voltar
        </Button>
      </Form>
    </Pagina>
  );
};

export default Formulario;
