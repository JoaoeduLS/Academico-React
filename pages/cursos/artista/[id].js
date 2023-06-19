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
      const artista = JSON.parse(window.localStorage.getItem("artista"));
      const curso = artista[id];

      for (let atributo in curso) {
        setValue(atributo, curso[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const artistas = JSON.parse(window.localStorage.getItem("artistas")) || [];
    artistas.splice(query.id, 1, dados);
    window.localStorage.setItem("artistas", JSON.stringify(artistas));
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
    <Pagina titulo="Novo artista">
      <Form>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>ID:</Form.Label>
          <Form.Control type="text" {...register("id", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Artista">
          <Form.Label>Artista:</Form.Label>
          <Form.Control type="text" {...register("Artista", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Departamento">
          <Form.Label>Departamento:</Form.Label>
          <Form.Control
            type="Email"
            {...register("Departamento", validatorNome)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Informacao">
          <Form.Label>Informacao do Artista:</Form.Label>
          <Form.Control
            type="text"
            {...register("Informacao", validatorArte)}
          />
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

export default form;
