import React from "react";
import CommunitySection from "../../components/communitySection/CommunitySection";
import "./Community.css";

const Community = () => {
  return (
    <>
      <div className="communityFlex">
        <div className="communityContainer">
          <h1>Comunidad</h1>
          <CommunitySection />
        </div>
      </div>
    </>
  );
};

export default Community;
