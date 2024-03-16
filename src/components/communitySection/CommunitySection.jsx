import React from "react";
import { useNavigate } from "react-router-dom";
import sectionsData from "../../data/sections.json";
import "./CommunitySection.css";

const CommunitySection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="gridCommunity">
        {sectionsData.map((section, id) => (
          <div key={id} className="sectionFlex">
            <h2>{section.title}</h2>
            <h3>Responsable: {section.by}</h3>
            <p>0/{section.participants} participantes</p>
            <img
              className="iconCommunity"
              src={section.icon}
              alt={section.title}
            />
            <button>Entra a la sala</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/")}>
        {`<- `}Click aca para devolver a la pantalla principal
      </button>
    </>
  );
};

export default CommunitySection;
