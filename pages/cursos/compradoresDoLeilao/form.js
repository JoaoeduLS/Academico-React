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
    const compraFinalizada =
      JSON.parse(window.localStorage.getItem("compraFinalizada")) || [];
    compraFinalizada.push(dados);
    window.localStorage.setItem(
      "compraFinalizada",
      JSON.stringify(compraFinalizada)
    );
    console.log(dados);
  }

  const validatorNome = {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 2000,
      message: "A quantidade de caracteres máxima é 2000",
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
          <Form.Control type="email" {...register("Email")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CEP">
          <Form.Label>CEP:</Form.Label>
          <Form.Control type="text" {...register("CEP")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Cidade">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control type="text" {...register("Cidade")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Númerodocartão">
          <Form.Label>Número do cartão:</Form.Label>
          <Form.Control type="text" {...register("Númerodocartão")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Quantidadedeprodutos">
          <Form.Label>Quantidade de produtos:</Form.Label>
          <Form.Control type="text" {...register("Quantidadedeprodutos")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Nomedoquadro">
          <Form.Label>Nome do quadro:</Form.Label>
          <Form.Control type="text" {...register("Nomedoquadro")} />
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

export default index;
