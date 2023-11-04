import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./AppSummary.module.css";
import appLinksStyle from "./appLinks.module.css";

const SolitaireSummary: React.FC = () => {
  return (
    <div className={styles.AppSummary}>
      <div className={styles.body}>
        <div className={styles.text}>
          <div className={styles.row}>
            <div className={styles.iconContainer}>
              <Image
                className={styles.iconImage}
                alt="Solitaire Icon"
                width={512}
                height={512}
                src="/images/solitaire_icon.png"
              />
            </div>
            <div style={{ flex: 1 }}>
              <div className={styles.title}>
                <Link href="/apps/solitaire">Klondike Solitaire</Link>
              </div>
              <div className={styles.subtitle}>
                Classic Solitaire. No Ads. No Frills.
              </div>
            </div>
          </div>
          <p>
            <div className={appLinksStyle.appLinks}>
              <div className={appLinksStyle.playStore}>
                <Link
                  href="https://play.google.com/store/apps/details?id=au.com.bure.apps.solitaire&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
                  target="_blank"
                >
                  <img
                    alt="Get it on Google Play"
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  />
                </Link>
              </div>
            </div>
          </p>
        </div>
        <div className={styles.screenshots}>
          <Link href="/apps/solitaire">
            <img src="/images/solitaire_play_feature_image.jpg" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolitaireSummary;
