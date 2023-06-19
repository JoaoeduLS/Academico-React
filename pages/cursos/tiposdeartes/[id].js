import Pagina from "@/components/Pagina";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const form = () => {
  const { query } = useRouter();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (query.id) {
      const id = query.id;
      const artesdoartista = JSON.parse(
        window.localStorage.getItem("artesdoartista")
      );
      const curso = artesdoartista[id];

      for (let atributo in curso) {
        setValue(atributo, curso[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const artesdoartista =
      JSON.parse(window.localStorage.getItem("artesdoartista")) || [];
    artesdoartista.splice(query.id, 1, dados);
    window.localStorage.setItem(
      "artesdoartista",
      JSON.stringify(artesdoartista)
    );
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
  const validatorArte = {
    required: "O campo é obrigatório",
  };

  return (
    <Pagina titulo="Nova Arte">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="quadro">
          <Form.Label>Quadro:</Form.Label>
          <Form.Control type="text" {...register("quadro", validatorArte)} />
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

export default form;
