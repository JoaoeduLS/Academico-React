import Pagina from "@/components/Pagina";
import Error from "next/error";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { mask } from "remask";

const Formulario = () => {
  const {
    register,
    handleSubmit /*Colocando mensagem de erro na validacao formState:{errors}*/,
    setValue,
  } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
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
  const validatorNumber = {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 20,
      message: "A quantidade de caracteres máxima é 20",
    },
  };
  const validatorcampo = {
    required: "O campo é obrigatório",
  };
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Formulário">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Numero">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control
            type="text"
            placeholder="(00) 90000-0000"
            mask="(99) 99999-9999"
            {...register("Numero", validatorNumber)}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="Email" {...register("Email", validatorNome)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagemId">
          <Form.Label>ID da Imagem:</Form.Label>
          <Form.Control type="text" {...register("imagemId", validatorcampo)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Modalidade">
          <Form.Label>Estilo:</Form.Label>
          <Form.Select {...register("Modalidade", validatorcampo)}>
            <option></option>
            <option>Desenho de observação</option>
            <option>Desenho de memorização</option>
            <option>Desenho realista </option>
            <option>Desenho abstrato </option>
            <option>Desenho a mão livre </option>
            <option>Mangá </option>
            <option>HQ </option>
            <option>Chibi </option>
            <option>Doodle Art</option>
            <option>Cartoon</option>
            <option> Estilo Disney </option>
            <option>Zentangle</option>
            <option> Desenho 3D</option>
            <option>Hiper-realismo</option>
            <option>Outro...</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit(salvar)}>
          Salvar
        </Button>{" "}
        <Button variant="dark" href="/cursos">
          Voltar
        </Button>
      </Form>
    </Pagina>
  );
};

export default Formulario;
