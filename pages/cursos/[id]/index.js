import Pagina from "@/components/Pagina";
import React from "react";
import { Card } from "react-bootstrap";
import apiArts from "@/service/apiArt";

const index = ({ artes }) => {
  return (
    <Pagina titulo={artes.title}>
      {["Danger"].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === "light" ? "dark" : "white"}
          style={{
            width: "20rem",
            boxShadow: "0 17px 10px rgba(0, 0, 0, 0.3)",
          }}
          className="mb-2"
        >
          <Card.Body>
            <Card.Img
              src={`https://www.artic.edu/iiif/2/${artes.image_id}/full/843,/0/default.jpg`}
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
            <br></br>
            <br></br>
            <Card.Title className="text-center">
              {variant} {artes.title}{" "}
            </Card.Title>
          </Card.Body>
          <Card>
            <ul style={{ color: "black" }}>
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

export async function getServerSideProps(context) {
  const id = context.params.id;
  const resultado = await apiArts.get(`/artworks/${id}`);
  const artes = await resultado.data.data;
  return {
    props: { artes }, // will be passed to the page component as props
  };
}
