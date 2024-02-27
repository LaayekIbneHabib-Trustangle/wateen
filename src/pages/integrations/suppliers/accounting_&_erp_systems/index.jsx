import React from "react";
import { useLocation } from "react-router-dom";
import { HeroSecondary, Wrapper, Bars } from "../../../../components";

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
      <section style={{ marginBottom: "50rem" }}>
        <Wrapper>
          <Bars />
        </Wrapper>
      </section>
    </>
  );
};

export default AccountingAndERPSytems;
