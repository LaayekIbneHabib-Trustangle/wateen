import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  RequestADemo,
} from "../../../../components";
// import { section } from "./style";

const MultiUnitsAndChains = () => {
  const location = useLocation();

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="AP Manager"
          h3="Get Better Control Over Upcoming Costs and Full Visibility into Approval Cycle with Wateen AP Manager"
        />
      </section>
      <section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <Brands />
          </div>
        </Wrapper>
      </section>
      <section style={{ marginBottom: "50rem" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default MultiUnitsAndChains;
