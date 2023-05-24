import Cabecalho from "@/components/Cabecalho";
import Pagina from "@/components/Pagina";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import CircleLoader from "react-spinners/CircleLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {loading ? (
        <CircleLoader color={"#800000"} loading={loading} size={90} />
      ) : (
        <Button
          variant="secondary"
          size="lg"
          href="/inicio"
          style={{
            backgroundColor: "#800000",
          }}
        >
          Bem-Vindo ao LeiloART
        </Button>
      )}
    </div>
  );
};

export default index;
