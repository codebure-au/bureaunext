import React from "react";
import Link from "next/link";

import styles from "./NavFooter.module.css";

const NavFooter: React.FC = () => {
  return (
    <div className={styles.NavFooter}>
      <div className={styles.footer}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>BURE</div>
          <Link href="/">Home</Link>
          <Link href="/support">Support</Link>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Link href="/apps">Apps</Link>
          </div>
          <Link href="/apps/freecell">FreeCell</Link>
          <Link href="/apps/solitaire">Solitaire</Link>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <Link href="/policies">Policies</Link>
          </div>
          <Link href="/policies/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default NavFooter;
