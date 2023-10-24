import React from "react";
import Title from "../../Title";

import styles from "../app.module.css";
import appLinksStyle from "../../appLinks.module.css";

export default function Solitaire() {
  return (
    <div className="page">
      <Title text="BURE - Solitaire" />
      <div className={styles.App}>
        <div className={styles.body}>
          <div className={styles.text}>
            <div className={styles.row}>
              <div className={styles.icon}>
                <img src="/images/solitaire_icon.png" />
              </div>
              <div>
                <div className={styles.title}>Solitaire</div>
                <div className={styles.subtitle}>Classic Solitaire. No Frills.</div>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <p>
                Solitaire Solitaire, no ads, no frills. Options include
                background colour changing, left-handed undo, and foundation
                location customisation. Now with more than one style of card back! 
                Unlimited undo and easy restart allow for fun and relaxing gameplay.
              </p>
            </div>
            <p>
              <div className={appLinksStyle.appLinks}>
                <div className={appLinksStyle.playStore}>
                  <a
                    href="https://play.google.com/store/apps/details?id=au.com.bure.apps.solitaire&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
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
            <img src="/images/solitaire_android_screenshot.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
