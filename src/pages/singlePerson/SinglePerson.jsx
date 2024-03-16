import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import singlePlayerData from "../../data/singlePlayer.json";
import "./SinglePerson.css";

const SinglePerson = () => {
  const [gameChoice, setGameChoice] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <div className="listFlex">
        <div
          className={`listFlexGame ${
            gameChoice ? "" : "noDisplaySinglePlayer"
          }`}
        >
          <h1>Un solo jugador</h1>
          <h3>
            Explora y juega dando click a cada juego dentro de la siguiente
            lista:
          </h3>
          {singlePlayerData.map((single, id) => (
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

export default SinglePerson;
