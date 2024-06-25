import Link from 'next/link';
import './terms.css';

const TermsAndConditions = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="terms">
        <h1 className="gradient-text">Terms & Conditions</h1>
        <section>
          <h2>Introduction</h2>
          <p>
            Welcome to MindInsight! By accessing or using our website, services, or applications (collectively, the &quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). Please read them carefully.
          </p>
          <p>
            <strong>Disclaimer:</strong> MindInsight is an AI-powered service providing therapeutic insights. It is not a licensed therapist or a substitute for professional therapy. Always seek the advice of your mental health professional with any questions you may have regarding a mental health condition.
          </p>
        </section>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using MindInsight, you accept and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our Service.
          </p>
        </section>

        <section>
          <h2>2. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Any changes will be posted on this page, and it is your responsibility to review these Terms regularly. Continued use of the Service after any changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2>3. Use of the Service</h2>
          <h3>Eligibility</h3>
          <p>
            You must be at least 18 years old to use MindInsight. By using the Service, you represent and warrant that you are 18 or older and have the legal capacity to enter into these Terms.
          </p>
          <h3>Account Registration</h3>
          <p>
            To access certain features, you may need to create an account. You agree to provide accurate, current, and complete information during registration and to update such information as necessary. You are responsible for maintaining the confidentiality of your account login details and for all activities that occur under your account.
          </p>
          <h3>Personal Use</h3>
          <p>
            The Service is intended for personal use only. You agree not to use the Service for any commercial purpose without our prior written consent.
          </p>
        </section>

        <section>
          <h2>4. Privacy and Data Security</h2>
          <p>
            Your privacy is important to us. Our <Link href="/privacypolicy">Privacy Policy</Link> explains how we collect, use, and protect your information. By using the Service, you agree to the collection and use of information in accordance with our Privacy Policy.
          </p>
        </section>

        <section>
          <h2>5. Subscription and Billing</h2>
          <h3>Subscription Plans</h3>
          <p>
            MindInsight offers a subscription plan of &dollar;15 per month, which includes a 7-day free trial. You can upgrade or cancel your subscription at any time.
          </p>
          <h3>Payment</h3>
          <p>
            All payments are handled through a secure third-party payment processor. By subscribing, you authorize us to charge your payment method for the subscription fee. You are responsible for any applicable taxes and fees.
          </p>
          <h3>Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellations will take effect at the end of your current billing cycle, and you will not be charged for the following month.
          </p>
        </section>

        <section>
          <h2>6. Intellectual Property</h2>
          <p>
            All content, features, and functionality of the Service, including text, graphics, logos, and software, are the property of MindInsight or its licensors and are protected by copyright, trademark, and other intellectual property laws. You agree not to reproduce, distribute, modify, or create derivative works of any content from the Service without our prior written consent.
          </p>
        </section>

        <section>
          <h2>7. Prohibited Activities</h2>
          <p>
            You agree not to:
          </p>
          <ul>
            <li>Use the Service for any unlawful purpose.</li>
            <li>Harass, abuse, or harm other users.</li>
            <li>Interfere with or disrupt the Service.</li>
            <li>Attempt to gain unauthorized access to our systems or networks.</li>
            <li>Upload or transmit any viruses or malicious code.</li>
          </ul>
        </section>

        <section>
          <h2>8. Disclaimers and Limitation of Liability</h2>
          <h3>Disclaimer of Warranties</h3>
          <p>
            MindInsight provides the Service &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or secure.
          </p>
          <h3>Limitation of Liability</h3>
          <p>
            To the fullest extent permitted by law, MindInsight and its affiliates, officers, directors, employees, and agents will not be liable for any indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the Service or your violation of these Terms.
          </p>
        </section>

        <section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless MindInsight and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising from or related to your use of the Service or your violation of these Terms.
          </p>
        </section>

        <section>
          <h2>10. Governing Law and Dispute Resolution</h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the jurisdiction in which MindInsight operates, without regard to its conflict of law principles. Any disputes arising from or related to these Terms or the Service will be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>
        </section>

        <section>
          <h2>11. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please contact us at <a href="mailto:syedali.asar14@gmail.com">syedali.asar14@gmail.com</a>.
          </p>
        </section>

        <section>
          <h2>12. Entire Agreement</h2>
          <p>
            These Terms constitute the entire agreement between you and MindInsight regarding your use of the Service and supersede all prior agreements and understandings.
          </p>
        </section>

        <p>
          By using MindInsight, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
