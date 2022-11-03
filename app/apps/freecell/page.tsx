import React from "react";
import Title from "../../Title";

import styles from "../app.module.css";
import appLinksStyle from "../../appLinks.module.css";

export default function FreeCell() {
  return (
    <div className="page">
      <Title text="BURE - FreeCell" />
      <div className={styles.App}>
        <div className={styles.body}>
          <div className={styles.text}>
            <div className={styles.title}>FreeCell</div>
            <div className={styles.subtitle}>Classic FreeCell. No Frills.</div>
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
                <div className={appLinksStyle.appStore}>
                  <a
                    href="https://apps.apple.com/app/freecell-ad-free/id1645268425"
                    target="_blank"
                  >
                    <img
                      alt="Download on the App Store"
                      src="/images/appstore.svg"
                    />
                  </a>
                </div>
                <div className={appLinksStyle.playStore}>
                  <a
                    href="https://play.google.com/store/apps/details?id=au.com.bure.apps.freecell&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                    target="_blank"
                  >
                    <img
                      alt="Get it on Google Play"
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    />
                  </a>
                </div>
              </div>
            </p>
          </div>
          <div className={styles.screenshots}>
            <img src="/images/ios_screenshot.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
