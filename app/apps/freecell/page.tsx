import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title from "../../Title";

import styles from "../app.module.css";
import appLinksStyle from "../../appLinks.module.css";

export default function FreeCell() {
  return (
    <div className="page">
      <Title text="BURE - FreeCell" />
      <div className="page-content">
        <div className={styles.App}>
          <div className={styles.body}>
            <div className={styles.text}>
              <div className={styles.row}>
                <div className={styles.iconContainer}>
                  <Image
                    className={styles.iconImage}
                    alt="FreeCell Icon"
                    width={512}
                    height={512}
                    src="/images/freecell_icon.png"
                  />
                </div>
                <div>
                  <div className={styles.title}>FreeCell</div>
                  <div className={styles.subtitle}>
                    Classic FreeCell. No Frills.
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p>
                  FreeCell Solitaire, no ads, no frills. Options include
                  background colour changing, left-handed undo, and foundation
                  location customisation. Unlimited undo and easy restart allow
                  for fun and relaxing gameplay.
                </p>
              </div>
              <p>
                <div className={appLinksStyle.appLinks}>
                  <div className={appLinksStyle.playStore}>
                    <Link
                      href="https://play.google.com/store/apps/details?id=au.com.bure.apps.freecell&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                      target="_blank"
                    >
                      <img
                        alt="Get it on Google Play"
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      />
                    </Link>
                  </div>
                  <div className={appLinksStyle.appStore}>
                    <Link
                      href="https://apps.apple.com/app/freecell-ad-free/id1645268425"
                      target="_blank"
                    >
                      <img
                        alt="Download on the App Store"
                        src="/images/appstore.svg"
                      />
                    </Link>
                  </div>
                </div>
              </p>
            </div>
            <div className={styles.screenshots}>
              <img src="/images/freecell_ios_screenshot.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
