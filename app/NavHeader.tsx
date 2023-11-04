import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./NavHeader.module.css";

const NavHeader: React.FC = () => {
  return (
    <div className={styles.NavHeader}>
      <div className={styles.header}>
        <Link href="/">
          <Image
            alt="BURE Logo"
            className={styles.logo}
            src="/logo.svg"
            width={100}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
};

export default NavHeader;
