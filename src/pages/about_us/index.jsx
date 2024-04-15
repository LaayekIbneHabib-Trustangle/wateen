import React from "react";
import { useLocation } from "react-router-dom";
import { HeroSecondary, RequestADemo, Wrapper } from "../../components";

const AboutUs = () => {
  const location = ["Home", "Resources", "About Us"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Welcome to Wateen"
          h3="Revolutionizing B2B for Restaurants and Distributors"
        />
      </section>
      <section>
        <Wrapper>
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "5rem",
            }}
          >
            <p
              style={{
                color: "#FF7600",
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              Will help you!
            </p>
            <h2
              style={{
                color: "#52006A",
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              Wateen Your B2B Industry Solution
            </h2>
            <p
              style={{
                color: "#393939",
                fontSize: "1.5rem",
                fontWeight: "400",
              }}
            >
              Revolutionize Your Business with Wateen's Comprehensive B2B
              Solution.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "6rem",
              margin: "5rem 0 0 0",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/streamlined-operations.svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/time-saving-automation.svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/effortless-collaboration.svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/user-friendly-interface.svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/enhanced-profitability.svg" alt="" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "30rem",
              }}
            >
              <img src="/images/mission-driven.svg" alt="" />
            </div>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "2.5rem 0 2.5rem 0 ",
              }}
            >
              <div>
                <p
                  style={{
                    color: "#FF7600",
                    fontSize: "1.5rem",
                    fontWeight: "400",
                  }}
                >
                  Wateen Invoice Manager
                </p>
                <h2
                  style={{
                    color: "#52006A",
                    fontSize: "3rem",
                    fontWeight: "700",
                  }}
                >
                  Unleash the Power of Wateen
                </h2>
              </div>
              <img width="115rem" src="/images/left-right-arrow.svg" alt="" />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <div style={{ width: "34rem" }}>
                <img
                  width="100%"
                  src="/images/cutting-edge-solutions.svg"
                  alt=""
                />
              </div>
              <div style={{ width: "34rem" }}>
                <img
                  width="100%"
                  src="/images/automated-efficiency.svg"
                  alt=""
                />
              </div>
              <div style={{ width: "34rem" }}>
                <img width="100%" src="/images/empowering-teams.svg" alt="" />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <Wrapper>
          <RequestADemo />
        </Wrapper>
      </section>
    </>
  );
};

export default AboutUs;
