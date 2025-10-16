import React from "react";

function Card(props) {
  const cardStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  };

  return (
    <div style={cardStyle}>
      {props.title && <h3>{props.title}</h3>}
      {props.children}
    </div>
  );
}

export default Card;
