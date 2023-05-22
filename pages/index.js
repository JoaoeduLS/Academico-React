import Link from "next/link";
import React, { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    navigator("/cursos");
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      {loading ? (
        <PuffLoader color={"#05A41C"} loading={loading} size={100} />
      ) : (
        <Link href="/cursos"></Link>
      )}
    </div>
  );
};

export default index;
