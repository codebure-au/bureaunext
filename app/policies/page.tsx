import React from "react";
import Link from "next/link";
import Title from "../Title";

const Policies: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Policies" />
      <div className="page-content">
        <h1>Policies</h1>
        <p>
          We don&apos;t stand for much at Bure. But what we do stand for is
          listed right here, for legal purposes.
        </p>
        <ul>
          <li>
            <Link href="/policies/privacy">Privacy Policy</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Policies;
