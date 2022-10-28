import React from "react";
import Title from "../Title";

const Support: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Support" />
      <h1>Support</h1>
      <p>
        If you have any questions or enquiries, please contact{" "}
        <a href="mailto:support@bure.com.au">support@bure.com.au</a>.
      </p>
    </div>
  );
};

export default Support;
