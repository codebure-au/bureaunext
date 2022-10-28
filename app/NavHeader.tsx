import React from "react";
import Link from "next/link";

import styles from "./NavHeader.module.css";

const NavHeader: React.FC = () => {
  return (
    <div className={styles.NavHeader}>
      <div className="header">
        <Link href="/">
          <img
            src="/logo.svg"
            style={{
              width: "3.5em",
              height: "3.5em",
              padding: "0.25em",
            }}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavHeader;
