import React from "react";
import { useLocation } from "react-router-dom";
import {
  HeroSecondary,
  Wrapper,
  Bars,
  RequestADemo,
} from "../../../../components";

const IPAAS = () => {
  const location = useLocation();

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Integration Platform (iPaaS)"
          h3="Integration of Wateen for Suppliers!"
        />
      </section>
      <section style={{ margin: "5rem 0 5rem 0" }}>
        <Wrapper>
          <Bars img="/images/reachware.svg" />
          <br />
          <br />
          <Bars img="/images/ipaas-buyers-how-it-works.svg" />
          <br />
          <br />
          <h2
            style={{
              color: "#52006A",
              textAlign: "center",
              fontSize: "3rem",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              marginTop: "5rem",
            }}
          >
            Benefits of Wateen with the Integration Platforms
          </h2>
          <br />
          <br />
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img src="/images/ipaas-buyers-efficiency.svg" alt="" />
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: ".5rem",
              }}
            >
              <img src="/images/ipaas-buyers-time-saving.svg" alt="" />
              <img src="/images/ipaas-buyers-improved-accuracy.svg" alt="" />
              <img src="/images/ipaas-buyers-enhanced-visibility.svg" alt="" />
              <img src="/images/ipaas-buyers-cost-optimization.svg" alt="" />
            </div>
          </div>
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

export default IPAAS;
