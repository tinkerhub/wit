import React from "react";
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature_1.svg";
import image1 from "../images/feature_2.svg";
import Fimage2 from "../images/feature_3.svg";

function Feature() {
  return (
    <div id="features">
      <div className="a-container">
        <FeatureBox image={featureimage} title="Foundational Course" />
        <FeatureBox image={image1} title="Lightning Talks" />
        <FeatureBox image={Fimage2} title="Hackathons" />
      </div>
    </div>
  );
}

export default Feature;
