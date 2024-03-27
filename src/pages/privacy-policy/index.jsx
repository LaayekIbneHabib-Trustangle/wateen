import React from "react";
import Wrapper from "../../components/wrapper";
import "./style.css";

import RequestADemo from "../../components/request_a_demo";

export default function PrivacyPolicy() {
  return (
    <Wrapper>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <article>
          <h1>Privacy Policy</h1>
          <h3>Introduction</h3>
          <p>
            Thank you for choosing Wateen as your B2B Online Marketplace and
            Inventory Management Platform. We are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our platform. By accessing or using
            Wateen's services, you consent to the practices described in this
            Privacy Policy.
          </p>
          <h3>Information We Collect</h3>
          <p>
            <span>
              We may collect certain information from you when you register an
              account or use our platform. The types of information we collect
              may include:
            </span>
          </p>
          <ul>
            <li>
              Providing Services: We use your information to facilitate your use
              of our platform, process your transactions, and deliver the
              requested services.
            </li>
            <li>
              Personalization: We may personalize your experience based on the
              information you provide, including recommending relevant products
              or services.
            </li>
            <li>
              Communication: We may use your contact information to send you
              administrative or promotional messages related to our services.
              You can opt-out of receiving promotional communications at any
              time.
            </li>
            <li>
              Analytics and Improvements: We analyze user behavior and
              engagement patterns to improve our platform, enhance its
              functionality, and develop new features.
            </li>
            <li>
              Legal Compliance: We may use your information to comply with
              applicable laws, regulations, or legal processes, and to protect
              our rights, privacy, safety, or property.
            </li>
          </ul>
          <h3>Data Security and Retention</h3>
          <p>
            We implement appropriate security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet or
            electronic storage is completely secure, and we cannot guarantee the
            absolute security of your data.
            <br />
            <br />
            We retain your information only for as long as necessary to fulfill
            the purposes outlined in this Privacy Policy, unless a longer
            retention period is required or permitted by law.
          </p>
          <h3>Information Sharing and Disclosure</h3>
          <p>
            <span>
              We may share your information with third parties in the following
              circumstances:
            </span>
          </p>
          <ul>
            <li>
              Service Providers: We may engage trusted third-party service
              providers who assist us in operating our platform, providing
              customer support, conducting analytics, or processing payments.
              These providers have access to your information only to perform
              specific tasks on our behalf and are obligated to keep it
              confidential.
            </li>
            <li>
              Business Transfers: In the event of a merger, acquisition, or sale
              of all or a portion of our assets, your information may be
              transferred to the acquiring entity.
            </li>
            <li>
              Legal Compliance: We may disclose your information if required by
              law or in response to valid legal requests from government
              authorities, courts, or law enforcement agencies.
            </li>
          </ul>
          <h3>Your Choices</h3>
          <p>
            <span>
              You have certain choices regarding the information you provide to
              us:
            </span>
          </p>
          <ul>
            <li>
              Account Information: You can update or correct your account
              information by accessing your account settings.
            </li>
            <li>
              Communications: You can opt-out of receiving promotional
              communications from us by following the instructions provided in
              the communication or by contacting us directly.
            </li>
            <li>
              Cookies: Most web browsers are set to accept cookies by default.
              You can adjust your browser settings to reject cookies or notify
              you when a cookie is being sent. However, please note that
              disabling cookies may affect the functionality of our platform.
            </li>
          </ul>
          <h3>Children's Privacy</h3>
          <p>
            Our platform is not intended for use by individuals under the age of
            18. We do not knowingly collect personal information from children.
            If you believe we may have collected information from a child,
            please contact us immediately.
          </p>
          <h3>Updates to this Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated Privacy Policy on our
            platform or by other means. Please review this Privacy Policy
            periodically for any updates.
          </p>
          <h3>Contact Us</h3>
          <p>
            If you have any questions, concerns, or requests regarding these
            Terms, please contact us at{" "}
            <span>
              <a href="mailto:info@wateen.io">info@wateen.io</a>
            </span>
          </p>
        </article>
        <div style={{ marginTop: "5rem" }}>
          <RequestADemo />
        </div>
      </section>
    </Wrapper>
  );
}
