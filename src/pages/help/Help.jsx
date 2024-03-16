import React from "react";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import "./Help.css";

const Help = () => {
  const navigate = useNavigate();

  const youtubeLink = "https://www.youtube.com/watch?v=PQRch_tfdX4";

  return (
    <>
      <div className="helpFlex">
        <div className="helpContainer">
          <h2>Necesitas ayuda ?</h2>
          <p>
            En el siguiente video encontraras paso a paso de como utilizar la
            aplicacion, ademas una guia muy detallada para que aproveches al
            maximo nuestra aplicacion:
          </p>
          <ReactPlayer
            url={youtubeLink}
            controls={true}
            width="560px"
            height="315px"
          />
          <p>
            Para mas Información no dudes en contactarnos por los siguientes
            medios:
          </p>
          <div className="flexButtons">
            <div className="flexInfoButtons">
              <img className="imageHelp" src="/imagenes/duda.png" alt="" />
              <button>Información</button>
            </div>
            <div className="flexInfoButtons">
              <img
                className="imageHelp"
                src="/imagenes/voluntaabue.png"
                alt=""
              />
              <button>Asistencia</button>
            </div>
          </div>
        </div>
        <button onClick={() => navigate("/")}>
          {`<- `}Click aca para devolver a la pantalla principal
        </button>
      </div>
    </>
  );
};

export default Help;
