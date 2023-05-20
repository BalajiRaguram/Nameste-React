import React from "react";
import { ShimmerSimpleGallery } from "react-shimmer-effects-18";

const Shimmer = () => {
  return (
    <>
      <div className="res-container">
        {Array(10)
          .fill("")
          .map((ele, index) => (
            <div key={index} className="res-card"></div>
          ))}
      </div>
    </>
  );
};

export default Shimmer;
