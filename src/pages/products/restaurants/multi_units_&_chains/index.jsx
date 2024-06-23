import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  Benefits,
  AlternateCards,
} from "../../../../components";
import RequestADemo from "../../../../components/request-a-demo";

// import { section } from "./style";

const MultiUnitsAndChains = () => {
  const images = [
    "/images/efficient-operations.webp",
    "/images/centralized-performance-tracking.webp",
    "/images/scalable-solutions.webp",
    "/images/task-automation.webp",
    "/images/real-time-analytics.webp",
    "/images/cost-reduction-and-increase-profit.webp",
  ];

  const captions = [
    "Efficient Operations",
    "Centralized Performance Tracking",
    "Scalable Solutions",
    "Task Automation",
    "Real-time Analytics",
    "Cost Reduction and Increase Profit",
  ];

  const forAlternateCards = {
    wateenMultiUnitsAndChainsSoftware: {
      caption: "will help you!",
      heading: "Wateen Multi Units and Chains Software",
      details:
        "Wateen Multi-Units and Chains Software provide several benefits to businesses, such as increased efficiency, cost savings, and improved customer service. By using software to manage multiple locations and chains, businesses can streamline their operations, saving time and money. With the software, businesses can quickly and easily access data from all their locations, enabling them to make informed decisions. Furthermore, Multi-Units and Chains Software also provides features to track inventory, monitor sales, and manage customer relationships. These features are critical to maintaining a successful business and can help to improve customer service and boost profits.",
      image: "/images/wateen-multi-units-and-chains-software.webp",
    },

    costSavings: {
      heading: "Cost Savings",
      details:
        "Wateen Multi-unit and chain software helps reduce overhead costs, such as travel expenses, by allowing managers to manage their stores remotely. By automating certain processes, such as ordering, managers can also save time and money.",
      image: "/images/cost-savings.webp",
    },

    improvedCommunication: {
      heading: "Improved Communication",
      details:
        "Wateen Multi-unit and chain software also enables managers to communicate more effectively with their staff. This helps ensure that tasks are completed on time and with the highest quality.",
      image: "/images/improved-communication.webp",
    },

    increasedVisibility: {
      heading: "Increased Visibility",
      details:
        "Wateen Multi-unit and chain software gives store managers greater visibility into their store performance. By tracking sales, inventory, and customer data, managers can quickly identify areas of improvement and take action to maximize profits.",
      image: "/images/increased-visibility.webp",
    },
  };

  const location = ["Home", "Products", "Restaurants", "Multi Units & Chains"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Multi Units And Chains"
          h3="Streamlining Multi-Unit and Chain Operations with Software Solutions"
        />
      </section>
      <section
        style={{
          margin: "5rem 0 0rem 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "#FF7600",
            fontWeight: "700",
          }}
        >
          Wateen Multi Units and Chains
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#52006A",
            fontWeight: "800",
          }}
        >
          Offers Some Significant Benefits
        </h1>
        <div
          style={{
            margin: "0rem 0 0rem 0",
            display: "flex",
            gap: "0rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              width: images.length > 5 ? "120rem" : "90rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <Benefits images={images} captions={captions} />
          </div>
        </div>
      </section>
      <section
        style={{
          marginTop: "5rem",
        }}
      >
        <Wrapper>
          <AlternateCards forAlternateCards={forAlternateCards} />
        </Wrapper>
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
