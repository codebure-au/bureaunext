import React from "react";
import Title from "../../Title";

import styles from "./page.module.css";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page">
      <Title text="BURE - Privacy Policy" />
      <h1>Privacy Policy</h1>
      <h2>Introduction</h2>
      <p>
        BURE STUDIOS (ABN: 99 736 889 745) is committed to providing quality
        services to you and this policy outlines our ongoing obligations to you
        in respect of how we manage your Personal Information.
      </p>
      <p>
        We have adopted the Australian Privacy Principles (APPs) contained in
        the Privacy Act 1988 (Cth) (the Privacy Act). The NPPs govern the way in
        which we collect, use, disclose, store, secure and dispose of your
        Personal Information.
      </p>
      <p>
        A copy of the Australian Privacy Principles may be obtained from the
        website of The Office of the Australian Information Commissioner at
        www.aoic.gov.au
      </p>
      <h2>What is Personal Information?</h2>
      <p>
        Personal Information is information or an opinion that identifies an
        individual. Examples of Personal Information include: names, addresses,
        email addresses, phone and facsimile numbers.
      </p>
      <h2>Personal Information We Collect</h2>
      <p>None. We don't really care about who you are, just buy our stuff.</p>
      <h2>Policy Updates</h2>
      <p>
        This Policy may change from time to time and is available on our
        website.
      </p>
      <h2>Privacy Policy Complaints and Enquiries</h2>
      <p>
        If you have any queries or complaints about our Privacy Policy please
        contact us at:
      </p>
      <p className={styles.indent}>privacy@bure.com.au</p>
      <p className={styles.indent}>
        <div>BURE STUDIOS</div>
        <div>PO Box 1143</div>
        <div>Hampton North</div>
        <div>VIC 3188</div>
        <div>Australia</div>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
