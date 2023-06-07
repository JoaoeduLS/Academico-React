import Pagina from "@/components/Pagina";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit /*Colocando mensagem de erro na validacao formState:{errors}*/,
  } = useForm();

  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem("cursos")) || [];
    cursos.push(dados);
    window.localStorage.setItem("cursos", JSON.stringify(cursos));
    console.log(dados);
  }
  const validator = {
    required: "o campo e obrigatorio ",
    minLength: {
      value: 3,
      message: "a quantidade ao caracteres mininimo e 3",
    },
    required: "o campo e obrigatorio ",
    maxLength: {
      value: 30,
      message: "a quantidade ao caracteres maximo e 30 ",
    },
  };

  return (
    <Pagina titulo="Formulário">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome:</Form.Label>
          <Form.Control type="text" {...register("nome", validator)} />
          {errors.nome && <small>O campo e obrigatorio</small>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="Numero">
          <Form.Label>Telefone:</Form.Label>
          <Form.Control type="number" {...register("Numero")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="Email" {...register("Email")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="imagemId">
          <Form.Label>ID da Imagem:</Form.Label>
          <Form.Control type="text" {...register("imagemId")} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Modalidade">
          <Form.Label>Estilo:</Form.Label>
          <Form.Select {...register("Modalidade")}>
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
