import React from "react";
import { useNavigate } from "react-router-dom";
import "./TypeGame.css";

const TypeGame = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="typeGameFlex">
        <h1>Tipo de juego</h1>
        <h3>Escoge que tipo de juego quieres jugar</h3>
        <div className="typeGameContainer">
          <div className="playerFlex">
            <img
              onClick={() => navigate("/single")}
              className="imgGame"
              src="/imagenes/abesolo.png"
              alt=""
            />
            <h3 className="infoGame">Un solo jugador</h3>
          </div>
          <div className="playerFlex">
            <img
              onClick={() => navigate("/multi")}
              className="imgGame"
              src="/imagenes/comuabue.png"
              alt=""
            />
            <h3 className="infoGame">Conecta y juega con mas personas</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeGame;
