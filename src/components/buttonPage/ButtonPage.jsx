import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonPage.css";

const ButtonPage = ({ title, path, image }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="buttonContainer" onClick={() => navigate(path)}>
        <h1>{title}</h1>
        <img className="imageButton" src={image} alt="" />
      </div>
    </>
  );
};

export default ButtonPage;
