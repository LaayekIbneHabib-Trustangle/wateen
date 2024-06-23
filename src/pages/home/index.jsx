import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  AnimatedButton,
  AnimatedCard,
  StandardCard,
  TabCard,
  Brands,
} from "../../components";
import RequestADemo from "../../components/request-a-demo";

import { Section, Hero, Primary, Scroll, Seconary } from "./style";

const Home = () => {
  return (
    <>
      <Section>
        <Wrapper>
          <Hero>
            <Primary>
              <img className="wifi-ani" src="/images/wifi-ani.webp" alt="" />
              <h1>
                #1 B2B <span>Online</span>
              </h1>
              <h2>Marketplace and Inventory Management Platform</h2>
              <div>
                <Link to="distributors">
                  <AnimatedButton name="I'm a distributor" theme="#52006a" />
                </Link>
                <Link to="restaurants">
                  <AnimatedButton name="I'm a restaurant" theme="#ff7600" />
                </Link>
              </div>
            </Primary>
            <Scroll>
              <img src="/images/Arrow.webp" alt="Scroll to Wateen description" />
            </Scroll>
            <Seconary>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  // background: "red",
                  // width: "61rem",
                  // height: "30rem",
                }}
              >
                <img
                  style={{
                    width: "19.5rem",
                    height: "15.5rem",
                    margin: "-1rem .5rem 0 0",
                  }}
                  src="/images/this-spot-awaits-you.webp"
                  alt=""
                />
                <img
                  style={{
                    position: "relative",
                    zIndex: "1",
                    width: "14.5rem",
                    height: "13rem",
                    margin: ".5rem -31.5rem 0 0",
                  }}
                  src="/images/logo-effect.webp"
                  alt=""
                />
                <img
                  style={{ width: "40rem", height: "40rem" }}
                  src="/images/hero-widget.webp"
                  alt=""
                />
              </div>
            </Seconary>
          </Hero>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <br />
          <div
            style={{
              textAlign: "center",
              margin: "3rem 0 4rem 0",
            }}
          >
            <h2
              style={{
                color: "#52006A",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              What is <span style={{ color: "#ff7600" }}>Wateen</span>?
            </h2>
            <p
              style={{
                color: "#5f5f5f",
                textAlign: "center",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Wateen is a B2B online marketplace and inventory management
              platform for restaurants and distributors, making it easy to
              manage orders, billing, and payments, all-in-one platform.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            <AnimatedCard
              theme="#52006a"
              heading="Optimizing Business Automating Manual Tasks"
              paragraph="Wateen provides business owners and their employees with the tools
            to automate the manual tasks required to operate and grow their
            businesses"
              icon="/images/optimize.webp"
            />
            <AnimatedCard
              theme="#ffffff"
              heading="Easing Bulk Food and Beverage Ordering"
              paragraph="Simplifies ordering bulk food and beverages for restaurants and suppliers of all sizes"
              icon="/images/bag.webp"
              bg="/images/easing-bulk-food-and-beverage-ordering.webp"
            />
            <AnimatedCard
              theme="#52006a"
              heading="Improving Food Service through Enhanced Communication"
              paragraph="Lowers barriers to communication between restaurants and distributors, using what they have assets with the goal of making food service better for everyone"
              icon="/images/communication.webp"
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <br />
          <div
            style={{
              textAlign: "center",
              margin: "3rem 0 4rem 0",
            }}
          >
            <h2
              style={{
                color: "#52006A",
                fontSize: "3.5rem",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}
            >
              Why <span style={{ color: "#ff7600" }}>Wateen</span>?
            </h2>
            <p
              style={{
                color: "#5f5f5f",
                textAlign: "center",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}
            >
              Wateen Platform plays a central role in the Saudi economy. Here
              are some of the reasons why industry leaders have chosen Wateen as
              their Food and Beverage marketplace platform provider:
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
            }}
          >
            <StandardCard
              image="/images/all-orders-on-wateen-platform.webp"
              heading="All Orders on Wateen Platform"
              paragraph="All orders can be obtained in one platform, which is Wateen"
            />
            <StandardCard
              image="/images/one-platform-one-connection-one-provider.webp"
              heading="One Platform, One Connection, One Provider"
              paragraph="All market data channels can be combined into a single platform through a single connection to a single provider"
            />
            <StandardCard
              image="/images/wateen-trusted-by-leading-companies.webp"
              heading="Wateen Trusted by Leading Companies"
              paragraph="Wateen has been recognized and trusted by the leading companies in the food industry."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <TabCard
              image="/images/provides-effective-communication-channels.webp"
              heading="Provides effective communication channels"
              paragraph="Wateen platform provides effective communication channels that simplifies and speeds up the buying and selling process."
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "4rem",
              flexWrap: "wrap",
              marginTop: "3rem",
              paddingBottom: "4rem",
            }}
          >
            <StandardCard
              image="/images/ultimate-supply-chain-solution.webp"
              heading="Ultimate Supply Chain Solution"
              paragraph="Wateen covers all challenges in security, quality, traceability, planning, reporting and dashboard."
            />
            <StandardCard
              image="/images/connecting-companies-fueling-growth.webp"
              heading="Connecting Companies, Fueling Growth"
              paragraph="Facilitate the establishment of new business relationships between companies"
            />
            <StandardCard
              image="/images/cost-effective-marketing-solution.webp"
              heading="Cost-Effective Marketing Solution"
              paragraph="Allow companies to reduce their marketing expenses"
            />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <Brands />
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "3rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </Section>
    </>
  );
};

export default Home;
