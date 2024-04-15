import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSecondary,
  Wrapper,
  Bars,
  RequestADemo,
} from "../../../../components";

const AccountingAndERPSytemsBuyers = () => {
  const location = [
    "Home",
    "Intergrations",
    "Buyers",
    "Accounting & ERP Systems",
  ];

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
            <p
              style={{
                color: "#242424",
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "400",
              }}
            >
              In today's digital age, seamless integration between different
              software solutions is crucial for businesses to streamline their
              operations, improve efficiency, and make informed decisions.
              Wateen for Buyers offers integration options with several popular
              Accounting & ERP Systems.
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <Bars img="/images/accounting-&-erp-systems.svg" />
        </Wrapper>
      </section>
      <section style={{ marginTop: "5rem", marginBottom: "55rem" }}>
        <Wrapper>
          <RequestADemo />
        </Wrapper>
      </section>
    </>
  );
};

export default AccountingAndERPSytemsBuyers;
