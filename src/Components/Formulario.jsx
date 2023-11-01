import React, { useState } from "react";

const Formulario = ({ onSubmit }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length >= 3 && !input1.startsWith(" ") && input2.length >= 6) {
      onSubmit({ input1, input2 });
      setError(null);
    } else {
      setError("Por favor chequea que la información sea correcta");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div>
        <label htmlFor="input1">Campo 1:</label>
        <input
          type="text"
          id="input1"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input2">Campo 2:</label>
        <input
          type="text"
          id="input2"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
