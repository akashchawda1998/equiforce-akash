import React, { useState } from "react";

// Example Cookie Banner Component
const CookieBanner = ({ onOptOut }) => {
  const [visible, setVisible] = useState(true);

  const handleDecline = () => {
    setVisible(false);
    onOptOut();
  };

  if (!visible) return null;

  return (
    <div style={{ padding: "10px", background: "#f2f2f2", borderTop: "1px solid #ccc", position: "fixed", bottom: 0, width: "100%", zIndex: 1000 }}>
      <p style={{ margin: 0 }}>
        This site uses cookies to enhance your experience. You can choose to decline cookies.
      </p>
      <button onClick={handleDecline} style={{ marginTop: "5px" }}>
        Decline
      </button>
    </div>
  );
};

const PrivacyNotice = () => {
  const handleOptOut = () => {
    console.log("User opted out of cookies/sharing."); 
    // Add your logic to disable third-party cookies or analytics here
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>EquiForce Solutions U.S. Data Privacy Notice Supplement</h1>
      <p><strong>Effective Date:</strong> Dec 2023</p>

      <section>
        <h2>Scope</h2>
        <p>
          This U.S. Data Privacy Notice (“U.S. Supplement”) supplements our FactSet Privacy Statement and applies to processing personal information of residents of U.S. states with comprehensive data privacy laws. In case of inconsistencies, this U.S. Supplement prevails.
        </p>
        <p>
          "Personal information" means information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular individual or household.
        </p>
      </section>

      <section>
        <h2>Categories of Personal Information & Purpose</h2>
        <p>We collect personal information as described in the main FactSet Privacy Statement. If we collect new categories or use information for materially different purposes, this U.S. Supplement will be updated.</p>
      </section>

      <section>
        <h2>Sources of Personal Information</h2>
        <ul>
          <li><strong>Directly from you:</strong> via our site or employment applications.</li>
          <li><strong>Indirectly from you:</strong> by observing your activity on our site or services.</li>
          <li><strong>Automatically from you:</strong> via cookies or automatic tracking.</li>
          <li><strong>From service providers:</strong> third-party vendors for services and payments.</li>
        </ul>
      </section>

      <section>
        <h2>Categories of Personal Information Disclosed & Recipients</h2>
        <ul>
          <li>Basic Identifying Information – to service providers and partners.</li>
          <li>Internet/Network Activity – to service providers and partners.</li>
          <li>Payment Information – to payment processing providers.</li>
          <li>Commercial Information – to service providers and partners.</li>
        </ul>
      </section>

      <section>
        <h2>Your Privacy Rights</h2>
        <ol>
          <li>Access and notice of personal information collected in the past 12 months.</li>
          <li>Request correction of your personal information.</li>
          <li>Request deletion of personal information, subject to exceptions.</li>
        </ol>
        <p>To submit requests, contact <a href="mailto:dataprivacy@factset.com">dataprivacy@factset.com</a> or call 800-461-9330.</p>
      </section>

      <section>
        <h2>Agent Authorization</h2>
        <p>You may designate an agent to exercise your rights. We may still verify your identity.</p>
      </section>

      <section>
        <h2>Do Not Sell or Share My Personal Information</h2>
        <p>
          Our website uses cookies for site functionality and analytics. Third parties may track data for advertising. Under state laws, this may be considered sharing or selling your personal information. You have the right to opt out.
        </p>
        <p>
          Click "Decline" on the cookie banner to prevent third-party cookies. If you accepted previously, clear your browser cache and decline upon returning.
        </p>
      </section>

      <CookieBanner onOptOut={handleOptOut} />
    </div>
  );
};

export default PrivacyNotice;