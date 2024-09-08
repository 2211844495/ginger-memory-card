import React from "react";
import { images } from "./Images";
import '../styles/Card.css';
function Card({onClick, src, name, key}) {
  return (
    <>
      <div onClick={() => onClick(name)} className="card">
        <img src={src} alt={name} key={key}/>
        <h3>{name}</h3>
      </div>
    </>
  );
}
export default Card;
