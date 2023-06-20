import Pagina from "@/components/Pagina";
import Error from "next/error";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { mask } from "remask";

const index = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit /*Colocando mensagem de erro na validacao formState:{errors}*/,
    setValue,
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
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 40,
      message: "A quantidade de caracteres máxima é 40",
    },
  };
  const validatorCep = {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  };
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Finalizando Compra">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Numero">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="tel"
            placeholder="(00) 90000-0000"
            mask="(99) 99999-9999"
            {...register("Numero")}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" {...register("Email", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CPF">
          <Form.Label>CPF:</Form.Label>
          <Form.Control
            type="text"
            placeholder="000.000.000-00"
            mask="999.999.999-99"
            {...register("CPF", validatorNome)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="CEP">
          <Form.Label>CEP:</Form.Label>
          <Form.Control
            type="text"
            placeholder="00000-000"
            mask="99999-999"
            {...register("CEP", validatorCep)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Cidade">
          <Form.Label>Cidade:</Form.Label>
          <Form.Control type="text" {...register("Cidade", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Númerodocartão">
          <Form.Label>Número do cartão:</Form.Label>
          <Form.Control
            type="text"
            placeholder="0000 0000 0000 0000"
            mask="9999 9999 9999 9999"
            {...register("Númerodocartão", validatorNumberCartao)}
            onChange={handleChange}
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
          <Form.Label>Valor a ser Pago:</Form.Label>
          <Form.Control
            type="text"
            placeholder="R$ 000.000,00"
            mask="R$ 000.000,00"
            {...register("Valor", validatorNome)}
            onChange={handleChange}
          />
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
