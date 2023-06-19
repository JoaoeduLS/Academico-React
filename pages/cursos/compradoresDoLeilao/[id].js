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
      const compraFinalizada = JSON.parse(
        window.localStorage.getItem("compraFinalizada")
      );
      const curso = compraFinalizada[id];

      for (let atributo in curso) {
        setValue(atributo, curso[atributo]);
      }
    }
  }, [query.id]);

  function salvar(dados) {
    const compraFinalizada =
      JSON.parse(window.localStorage.getItem("compraFinalizada")) || [];
    compraFinalizada.splice(query.id, 1, dados);
    window.localStorage.setItem(
      "compraFinalizada",
      JSON.stringify(compraFinalizada)
    );
  }
  const validatorNome = {
    required: "O campo é obrigatório",
    minLength: {
      value: 1,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 2000,
      message: "A quantidade de caracteres máxima é 2000",
    },
  };
  const validatorNumberCartao = {
    required: "O campo é obrigatório",
    minLength: {
      value: 13,
      message: "A quantidade de caracteres mínima é 16",
    },
    maxLength: {
      value: 16,
      message: "A quantidade de caracteres máxima é 16",
    },
  };
  const validatorCep = {
    required: "O campo é obrigatório",
    minLength: {
      value: 5,
      message: "A quantidade de caracteres mínima é 5",
    },
    maxLength: {
      value: 9,
      message: "A quantidade de caracteres máxima é 9",
    },
  };

  return (
    <Pagina titulo="Finalizando Compra">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Numero">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="tel" {...register("Numero")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" {...register("Email", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CEP">
          <Form.Label>CEP:</Form.Label>
          <Form.Control type="text" {...register("CEP", validatorCep)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Cidade">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control type="text" {...register("Cidade", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Númerodocartão">
          <Form.Label>Número do cartão:</Form.Label>
          <Form.Control
            type="text"
            {...register("Númerodocartão", validatorNumberCartao)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Quantidadedeprodutos">
          <Form.Label>Quantidade de produtos:</Form.Label>
          <Form.Control
            type="text"
            {...register("Quantidadedeprodutos", validatorNome)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Nomedoquadro">
          <Form.Label>Nome do quadro:</Form.Label>
          <Form.Control
            type="text"
            {...register("Nomedoquadro", validatorNome)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Valor">
          <Form.Label>Vlaor a ser Pago:</Form.Label>
          <Form.Control type="text" {...register("Valor", validatorNome)} />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit(salvar)}>
          Salvar
        </Button>{" "}
        <Button
          variant="dark"
          href="/cursos/compradoresDoLeilao/compraFinalizada"
        >
          Finaliza Compra
        </Button>
      </Form>
    </Pagina>
  );
};

export default form;
