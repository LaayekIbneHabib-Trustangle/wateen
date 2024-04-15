import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSecondary,
  Wrapper,
  Bars,
  RequestADemo,
} from "../../../../components";

const Ecommerce = () => {
  const location = ["Home", "Intergrations", "Buyers", "Ecommerce"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Ecommerce"
          h3="Integration of Wateen for Buyers with Ecommerce Systems!"
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
              Wateen is a leading payment gateway provider that enables seamless
              and secure online transactions. By integrating Wateen with your
              eCommerce platform, you can offer your customers a wide range of
              payment options and enhance their shopping experience.
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <Bars img="/images/ecommerce.svg" />
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

export default Ecommerce;
