import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSecondary,
  Wrapper,
  Bars,

} from "../../../../components";
import RequestADemo from "../../../../components/request-a-demo";

const POS = () => {
  const location = ["Home", "Intergrations", "Buyers", "Point of Sale (POS)"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Point of Sale (POS)"
          h3="Integration of Wateen for Buyers with Point-of-Sale Systems!"
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
              Wateen is a leading provider of integrated communication services
              in the region, and their integration with popular POS systems
              streamlines operations and enhances efficiency for businesses.
            </p>
          </div>
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <Bars img="/images/pos.webp" />
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

export default POS;
