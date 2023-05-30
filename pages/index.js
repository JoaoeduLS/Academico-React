import React, { useEffect, useState } from "react";

import PuffLoader from "react-spinners/PuffLoader";
import { useRouter } from "next/router";

const index = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      router.push("/inicio");
    }, 7000);
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
        <PuffLoader color={"#800000"} loading={loading} size={200} />
      ) : (
        <></>
      )}
      {loading && (
        <img
          src="https://media.discordapp.net/attachments/954503804676603998/1112902819633168425/Design_sem_nome__2_-removebg-preview_1.png?width=606&height=606"
          alt="Loading"
          style={{ width: "90px", height: "90px", position: "absolute" }}
        />
      )}
    </div>
  );
};

export default index;
