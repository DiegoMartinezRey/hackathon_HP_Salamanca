import React from "react";
import { useNavigate } from "react-router-dom";
import multiplayerData from "../../data/multiplayer.json";
import "./Multiplayer.css";

const Multiplayer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="listFlex">
        <div className={`listFlexGame`}>
          <h1>Dos o mas jugadores</h1>
          <p>
            Explora, conectate con diferentes personas y juega dando click a
            cada juego dentro de la siguiente lista:
          </p>
          {multiplayerData.map((single, id) => (
            <div
              onClick={() => (window.location.href = single.link)}
              key={id}
              className="listContainer"
            >
              <h2>{single.name}</h2>
              <h3>{single.description}</h3>
              <img
                className="imageGameSingle"
                src={single.image}
                alt={single.name}
              />
            </div>
          ))}
        </div>
        <button onClick={() => navigate("/")}>
          {`<- `}Click aca para devolver a la pantalla principal
        </button>
      </div>
    </>
  );
};

export default Multiplayer;
