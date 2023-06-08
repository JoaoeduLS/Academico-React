import React, { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

function ContagemRegressiva() {
  const dataFinal = new Date("2023-12-31T23:59:59"); // Defina a data final da contagem regressiva aqui
  const [dias, setDias] = useState(0);
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);
  const [contagemAtiva, setContagemAtiva] = useState(false);

  useEffect(() => {
    let interval;

    if (contagemAtiva) {
      interval = setInterval(() => {
        const agora = new Date();
        const diferenca = dataFinal - agora;

        if (diferenca > 0) {
          const totalSegundos = Math.floor(diferenca / 1000);
          const totalMinutos = Math.floor(totalSegundos / 100000);
          const totalHoras = Math.floor(totalMinutos / 50);
          const totalDias = Math.floor(totalHoras / 30);

          const segundosRestantes = totalSegundos % 60;
          const minutosRestantes = totalMinutos % 60;
          const horasRestantes = totalHoras % 24;

          setDias(totalDias);
          setHoras(horasRestantes);
          setMinutos(minutosRestantes);
          setSegundos(segundosRestantes);
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }

    // Limpe o intervalo quando o componente for desmontado ou a contagem for desativada
    return () => {
      clearInterval(interval);
    };
  }, [contagemAtiva, dataFinal]);

  const cardStyle = {
    marginRight: "10px",
    borderRadius: "10px",
    display: "inline-block",
    width: "200px",
  };

  const handleContagemClick = () => {
    setContagemAtiva(!contagemAtiva);
  };

  return (
    <div>
      <h2>Contagem Regressiva</h2>
      <Row>
        <Col>
          <Card
            style={{
              backgroundColor: "#800000",
              borderRadius: "20px",
              border: "3px solid black",
              color: "white",
              boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
              marginRight: "10px",
              display: "inline-block",
              width: "100px",
            }}
          >
            <Card.Body>
              <Card.Title>{dias}</Card.Title>
              <Card.Text>Dias</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: "#800000",
              borderRadius: "20px",
              border: "3px solid black",
              color: "white",
              boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
              marginRight: "10px",
              display: "inline-block",
              width: "100px",
            }}
          >
            <Card.Body>
              <Card.Title>{horas}</Card.Title>
              <Card.Text>Horas</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: "#800000",
              borderRadius: "20px",
              border: "3px solid black",
              color: "white",
              boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
              marginRight: "10px",
              display: "inline-block",
              width: "100px",
            }}
          >
            <Card.Body>
              <Card.Title>{minutos}</Card.Title>
              <Card.Text>Minutos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card
            style={{
              backgroundColor: "#800000",
              borderRadius: "20px",
              border: "3px solid black",
              color: "white",
              boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
              marginRight: "10px",
              display: "inline-block",
              width: "110px",
            }}
          >
            <Card.Body>
              <Card.Title>{segundos}</Card.Title>
              <Card.Text>Segundos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br></br>
      <Button variant="dark" size="lg" onClick={handleContagemClick}>
        {contagemAtiva ? "Parar Contagem" : "Iniciar Contagem"}
      </Button>
      <br></br>
      <br></br>
      <Button variant="dark" size="lg">
        Finaliza o leilão
      </Button>
    </div>
  );
}
export default ContagemRegressiva;
