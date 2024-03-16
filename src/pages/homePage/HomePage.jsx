import React from "react";
import ButtonPage from "../../components/buttonPage/ButtonPage";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="flexContainer">
        <div className="homeContainer">
          <h1>DIKA</h1>
          <ButtonPage
            title="Juegos"
            path={"/typeOfGame"}
            image={"/imagenes/rompe.png"}
          />
          <ButtonPage
            title="Comunidad"
            path={"/community"}
            image={"/imagenes/comuni.png"}
          />
          <ButtonPage
            title="Soporte"
            path={"/help"}
            image={"/imagenes/volunta.png"}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
