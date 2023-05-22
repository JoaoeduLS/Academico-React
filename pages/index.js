import React, { useEffect, useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";

const index = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <PuffLoader
          color={"#05A41C"}
          loading={loading}
          size={100}
          aria-label="Carregando Spinner"
          data-testid="loader"
        />
      ) : (
        <h1>hello word</h1>
      )}
    </div>
  );
};

export default index;
