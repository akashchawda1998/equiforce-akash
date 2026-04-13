import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen w-full">

      {/* HERO */}
      <section className="bg-[#0B2341] text-white py-15 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mt-12">
          Terms of <span className="text-[#d97706]">Service</span>
        </h1>
        <p className="mt-4 text-gray-300 text-sm md:text-lg">
          Effective Date: April 1, 2026
        </p>
      </section>

      {/* CONTENT */}
      <section className="w-full px-4 md:px-10 lg:px-20 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 space-y-6 text-gray-700 leading-relaxed text-sm md:text-base">

          <p>
            Welcome to Equiforce Solutions, LLC. By accessing or using our website, you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use our website.
          </p>

          <h2 className="font-bold text-lg text-gray-900">1. Acceptance of Terms</h2>
          <p>
            By using our website, you affirm that you are at least 18 years old or have the legal consent of a parent or guardian to use our services.
          </p>

          <h2 className="font-bold text-lg text-gray-900">2. Modifications to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website after changes have been made constitutes acceptance of the revised Terms.
          </p>

          <h2 className="font-bold text-lg text-gray-900">3. Use of the Website</h2>
          <p>• You may use our website for lawful purposes only.</p>
          <p>• You agree not to engage in any activity that disrupts or interferes with the functionality of the website.</p>
          <p>• Unauthorized use of our website, including hacking or data scraping, is strictly prohibited.</p>

          <h2 className="font-bold text-lg text-gray-900">4. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and graphics, is the property of Equiforce Solutions or its licensors and is protected by intellectual property laws. You may not use, reproduce, or distribute any content without our express written consent.
          </p>

          <h2 className="font-bold text-lg text-gray-900">5. User Accounts</h2>
          <p>• You are responsible for maintaining the confidentiality of your account information.</p>
          <p>• You agree to notify us immediately of any unauthorized use of your account.</p>
          <p>• We are not liable for any losses caused by unauthorized use of your account.</p>

          <h2 className="font-bold text-lg text-gray-900">6. Privacy Policy</h2>
          <p>
            Your use of our website is subject to our Privacy Policy, which explains how we collect, use, and protect your information.
          </p>

          <h2 className="font-bold text-lg text-gray-900">7. Relationship with Client Subscription Agreement</h2>
          <p>
            If you are a client of Equiforce Solutions, LLC and use our SaaS platform, your relationship with us is governed by the terms of your written agreement (the “Client Subscription Agreement”) with Equiforce Solutions, LLC. These Terms of Service apply only to general website usage and do not alter or affect the terms of the Client Subscription Agreement.
          </p>

          <h2 className="font-bold text-lg text-gray-900">8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Equiforce Solutions, LLC and its affiliates are not liable for any damages arising from your use of the website, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>

          <h2 className="font-bold text-lg text-gray-900">9. Indemnification</h2>
          <p>
            You agree to indemnify and hold Equiforce Solutions, LLC, its officers, directors, employees, and agents harmless from any claims or damages resulting from your breach of these Terms or your violation of any law or the rights of a third party.
          </p>

          <h2 className="font-bold text-lg text-gray-900">10. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content, policies, or practices of any third-party websites.
          </p>

          <h2 className="font-bold text-lg text-gray-900">11. Termination</h2>
          <p>
            We reserve the right to terminate or suspend your access to the website at our discretion, without notice, for any violation of these Terms.
          </p>

          <h2 className="font-bold text-lg text-gray-900">12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the State of California, without regard to conflict of law principles.
          </p>

          <h2 className="font-bold text-lg text-gray-900">13. Dispute Resolution</h2>
          <p>
            Any dispute or claim arising out of or related to these Terms will be resolved by binding arbitration under the rules of [arbitration organization]. All proceedings will take place in Illinois, and this agreement will be governed by the laws of California.
          </p>

          <h2 className="font-bold text-lg text-gray-900">14. Contact Information</h2>
          <p>For any questions or concerns about these Terms, please contact us at:</p>

          <p className="font-medium">
            Equiforce Solutions, LLC <br />
            Email: contact@equiforcesolutions.com <br />
            Phone: +1 (626) 838-8118
          </p>

          <p>
            Thank you for visiting Equiforce Solutions, LLC.
          </p>

        </div>
      </section>
    </div>
  );
};

export default TermsOfService;