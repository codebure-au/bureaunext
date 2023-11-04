import React from "react";
import FreeCellSummary from "../FreeCellSummary";
import SolitaireSummary from "../SolitaireSummary";
import Title from "../Title";

const Apps: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Apps" />
      <div className="page-content">
        <FreeCellSummary />
        <SolitaireSummary />
      </div>
    </div>
  );
};

export default Apps;
