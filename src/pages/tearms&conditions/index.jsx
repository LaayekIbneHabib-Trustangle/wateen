import React from "react";
import Wrapper from "../../components/wrapper";
import "./style.css";

import RequestADemo from "../../components/request_a_demo";

export default function TermsAndConditions() {
  return (
    <Wrapper>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <article>
          <h1>Terms and Conditions</h1>
          <p style={{ textAlign: "center" }}>
            Please read these Terms and Conditions carefully before using
            Wateen, a B2B Online Marketplace, and Inventory Management Platform.
            These Terms govern your access to and use of our platform. By
            accessing or using Wateen, you agree to be bound by these Terms. If
            you do not agree with any part of these Terms, you may not use our
            platform.
          </p>
          <h3>1. Account Registration and Eligibility</h3>
          <ul>
            <li>
              1.1 Account Registration: In order to use certain features of
              Wateen, you may be required to register an account. You must
              provide accurate, current, and complete information during the
              registration process. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities
              that occur under your account.
            </li>
            <li>
              1.2 Eligibility: By using Wateen, you represent and warrant that
              you have the legal capacity and authority to enter these Terms and
              to comply with all applicable laws and regulations.
            </li>
          </ul>
          <h3>2. Use of the Platform</h3>
          <ul>
            <li>
              1.1 <span>License:</span> Subject to your compliance with these
              Terms, Wateen grants you a limited, non-exclusive,
              non-transferable, and revocable license to access and use our
              platform for its intended purpose.
            </li>
            <li>
              1.2 <span>Prohibited Conduct:</span> You agree not to engage in
              any of the following prohibited conduct:
            </li>
          </ul>
          <ul>
            <li>
              a. Violating any applicable laws, regulations, or third-party
              rights.
            </li>
            <li>
              b. Using Wateen for any fraudulent, illegal, or unauthorized
              purpose.
            </li>
            <li>
              c. Impersonating any person or entity or falsely stating or
              misrepresenting your affiliation with any person or entity.
            </li>
            <li>
              d. Interfering with or disrupting the integrity or performance of
              Wateen or its underlying infrastructure.
            </li>
            <li>
              e. Uploading or transmitting any viruses, malware, or other
              malicious code.
            </li>
            <li>
              f. Collecting or harvesting any information from other users
              without their consent.
            </li>
            <li>
              g. Engaging in any activity that may overload, disable, or impair
              the functioning of our platform.
            </li>
            <li>
              h. Attempting to gain unauthorized access to any portion or
              feature of Wateen or its related systems or networks.
            </li>
          </ul>
          <p>
            2.3 <span>Content Guidelines:</span> You are solely responsible for
            any content you post, upload, or transmit through Wateen. You agree
            not to post or share any content that is unlawful, defamatory,
            infringing, obscene, or otherwise objectionable. We reserve the
            right to remove or disable any content that violates these Terms.
          </p>
          <h3>3. Intellectual Property</h3>
          <ul>
            <li>
              3.1 <span>Ownership:</span> Wateen and its associated trademarks,
              service marks, logos, and other intellectual property rights are
              owned by Wateen or its licensors. You acknowledge that these Terms
              do not grant you any ownership rights to our intellectual
              property.
            </li>
            <li>
              3.2 <span>User Content:</span> By posting or sharing content on
              Wateen, you grant Wateen a non-exclusive, royalty-free, worldwide,
              sublicensable, and transferable license to use, reproduce, modify,
              adapt, publish, publicly display, and distribute the content for
              the purposes of operating and improving our platform.
            </li>
          </ul>
          <h3>4. Payments and Fees</h3>
          <ul>
            <li>
              4.1 <span>Fees:</span> Certain features or services provided by
              Wateen may require payment of fees. You agree to pay all
              applicable fees as specified on our platform. All fees are
              non-refundable unless otherwise stated.
            </li>
            <li>
              4.2 <span>Payment Processing:</span> Payments made through Wateen
              are processed by third-party payment processors. You acknowledge
              and agree that Wateen is not responsible for the processing of
              payments or the security of your payment information. Any disputes
              or issues regarding payments should be resolved directly with the
              payment processor.
            </li>
          </ul>
          <h3>5. Disclaimer of Warranties</h3>
          <p>
            Wateen is provided on an "as is" and "as available" basis. We do not
            make any warranties or representations, express or implied,
            regarding the reliability, accuracy, completeness, or availability
            of our platform. Your use of Wateen is at your own risk.
          </p>
          <h3>6. Limitation of Liability</h3>
          <p>
            To the maximum extent permitted by law, Wateen and its affiliates,
            officers, directors, employees, agents, and licensors shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including but not limited to loss of profits,
            data, or goodwill, arising out of or in connection with your use of
            Wateen.
          </p>
          <h3>7. Governing Law and Dispute Resolution</h3>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of [Jurisdiction]. Any disputes arising out of or relating
            to these Terms or your use of Wateen shall be resolved exclusively
            through binding arbitration in accordance with the rules of
            [Arbitration Institution].
          </p>
          <h3>8. Changes to the Terms</h3>
          <p>
            We reserve the right to modify or update these Terms at any time. We
            will notify you of any material changes by posting the updated Terms
            on our platform or by other means. Your continued use of Wateen
            after the effective date of the revised Terms constitutes your
            acceptance of the changes.
          </p>
          <h3>9. Contact Us</h3>
          <p>
            If you have any questions, concerns, or requests regarding these
            Terms, please contact us at info@wateen.io{" "}
          </p>
        </article>
        <div style={{ marginTop: "5rem" }}>
          <RequestADemo />
        </div>
      </section>
    </Wrapper>
  );
}
