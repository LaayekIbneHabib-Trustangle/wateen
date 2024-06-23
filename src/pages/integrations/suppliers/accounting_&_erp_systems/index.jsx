import React from "react";
import {
  HeroSecondary,
  Wrapper,
  Bars,

} from "../../../../components";
import RequestADemo from "../../../../components/request-a-demo";

const AccountingAndERPSytems = () => {
  const location = [
    "Home",
    "Intergrations",
    "Suppliers",
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
                color: "#848484",
                textAlign: "center",
                fontSize: "1.7rem",
                fontWeight: "400",
                lineheight: "30px",
                fontfamily: "Inter",
              }}
            >
              <br />
              Wateen offers seamless integration with popular ERP systems and
              accounting software, making it easier than ever to 
              <br />
              manage your business processes.
              <br />
              <br />
              Take a look at the benefits of integrating Wateen with the
              following platforms
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <Bars img="/images/accounting-&-erp-systems.webp" />
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

export default AccountingAndERPSytems;
