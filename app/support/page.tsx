import React from "react";
import Title from "../Title";

const Support: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Support" />
      <div className="page-content">
        <h1>Support</h1>
        <p>
          If you have any questions or enquiries, please contact{" "}
          <a href="mailto:support@bure.com.au">support@bure.com.au</a>.
        </p>
      </div>
    </div>
  );
};

export default Support;
