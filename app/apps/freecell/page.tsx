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
            <div className={styles.subtitle}>
              Classic FreeCell. No Ads. No Frills.
            </div>
            <div style={{ flex: 1 }}>
              <p>
                The classic Solitaire variant, FreeCell, fully ad-free. No ads,
                ever. Just play.
              </p>
              <p>
                Experience the relentless fun and excitement of FreeCell in a
                way never before seen on mobile devices - namely, without ads.
                There are a lot of options, including Left-Handed mode, and the
                ability to set the background to different colours. You can undo
                unlimited times, replay as much as you want, and even start a
                new game if you like.
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
