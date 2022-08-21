import React from "react";

const Plan = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Plan;
