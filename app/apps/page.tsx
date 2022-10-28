import React from "react";
import FreeCellSummary from "../FreeCellSummary";
import Title from "../Title";

const Apps: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Apps" />
      <FreeCellSummary />
    </div>
  );
};

export default Apps;
