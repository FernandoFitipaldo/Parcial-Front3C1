import React from "react";

const Card = ({ input1, input2 }) => {
  return (
    <div className="card">
      <h2>Información Ingresada:</h2>
      <p>Campo 1: {input1}</p>
      <p>Campo 2: {input2}</p>
    </div>
  );
};

export default Card;
