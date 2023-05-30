import Pagina from "@/components/Pagina";
import React from "react";
import { Card } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="Leilão-Compra">
      {["Danger"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{ width: "18rem" }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Img
              variant="top"
              src="https://arteeartistas.com.br/wp-content/uploads/2016/09/Tarde-de-Domingo-na-Ilha-da-Grande-Jatte-Georges-Seurat-1884-1886-%E2%80%93-Instituto-de-Arte-de-Chicago.jpg"
              style={{
                border: "3px solid white",
                borderRadius: "10px",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            />
          </Card.Body>
          <Card>
            <ul style={{ color: "black" }}>
              <h5>informacoes</h5>
              <li>Inf</li>
              <li>Inf</li>
              <li>Inf</li>
              <li>Inf</li>
              <li>Inf</li>
            </ul>
          </Card>
          <br></br>
        </Card>
      ))}
    </Pagina>
  );
};

export default index;
