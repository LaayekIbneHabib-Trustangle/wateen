import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSecondary,
  Wrapper,
  Bars,
  RequestADemo,
} from "../../../../components";

const AccountingAndERPSytems = () => {
  const location = useLocation();

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Accounting & ERP Systems"
          h3="Integration of Wateen with ERP & Accounting Systems!"
        />
      </section>
      <section>
        <Wrapper>
          <div style={{ margin: "5rem 0 5rem 0" }}>
            <h2
              style={{
                color: "#52006A",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "700",
                textTransform: "capitalize",
              }}
            >
              Are you a supplier looking to streamline your operations and
              improve efficiency?
            </h2>
            <p
              style={{
                color: "#242424",
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "400",
              }}
            >
              Wateen offers seamless integration with popular ERP systems and
              accounting software, making it easier than ever to manage your
              business processes.
              <br />
              Take a look at the benefits of integrating Wateen with the
              following platforms
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <Bars img="/images/accounting-&-erp-systems.svg" />
        </Wrapper>
      </section>
      <section style={{ marginBottom: "50rem" }}>
        <Wrapper>
          <RequestADemo />
        </Wrapper>
      </section>
    </>
  );
};

export default AccountingAndERPSytems;
