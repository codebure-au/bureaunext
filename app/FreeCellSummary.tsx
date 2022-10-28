import React from "react";
import Link from "next/link";

import styles from "./FreeCellSummary.module.css";
import appLinksStyle from "./appLinks.module.css";

const FreeCellSummary: React.FC = () => {
  return (
    <div className={styles.AppSummary}>
      <div className={styles.body}>
        <div className={styles.text}>
          <div style={{ flex: 1 }}>
            <div className={styles.title}>
              <Link href="/apps/freecell">FreeCell</Link>
            </div>
            <div className={styles.subtitle}>
              Classic FreeCell. No Ads. No Frills.
            </div>
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
          <Link href="/apps/freecell">
            <img src="/images/play_feature_image.jpg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FreeCellSummary;
