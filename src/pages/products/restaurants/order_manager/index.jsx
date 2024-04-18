import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  RequestADemo,
  Benefits,
  AlternateCards,
} from "../../../../components";
// import { section } from "./style";
import "./style.css";

const OrderManager = () => {
  const images = [
    "/images/automating-ordering.webp",
    "/images/seamless-operation.webp",
    "/images/enhanced-business-oversight.webp",
    "/images/efficient-management.webp",
    "/images/anticipating-business-needs.webp",
  ];

  const captions = [
    "Automating Ordering",
    "Seamless Operations",
    "Enhanced Business Oversight",
    "Efficient Management",
    "Anticipating Business Needs",
  ];

  const forAlternateCards = {
    wateenOrderManager: {
      caption: "will help you!",
      heading: "Wateen Order Manager",
      details:
        "Receiving, tracking, and fulfilling customer orders is a time-consuming, often error-prone process that costs companies not only time, but money. This is Wateen Order Manager System comes in to help streamline operations by automating many unavoidable back-office tasks.",
      image: "/images/wateen-order-manager.webp",
    },

    unifiedOrders: {
      heading: "Unified Orders",
      details: [
        "Easily store all your supplier catalogs for easy browsing.",
        "Mark favorites, custom lists, repeat requests, and set delegates for efficient ordering.",
        "Consolidate orders across multiple locations.",
        "Stay organized with a single source of truth for all requests.",
      ],
      image: "/images/unified-orders.webp",
    },

    eliminateThePossibilityOfHumanError: {
      heading: "Eliminate the Possibility of Human Error",
      details: [
        "Eliminate the possibility of losing an order.",
        "Schedule orders in advance or use the ordering tool.",
        "You will be provided with smart ordering suggestions that can help with quick and timely ordering.",
      ],
      spcil:
        "Since all entries are made in one place, it also eliminates the possibility of miscalculation or wrong orders being placed.",
      image: "/images/eliminate-the-possibility-of-human-error.webp",
    },

    realTimeVisibility: {
      heading: "Real-time Visibility",
      details: [
        "See order status and details down to each line item.",
        "Verify orders and alert suppliers immediately of errors or sell-outs.",
        "Oversee purchasing processes at all locations to ensure accuracy.",
        "Get an accurate view of your business with reliable data and analytics.",
      ],
      image: "/images/real-time-visibility-2.webp",
    },
  };

  const location = ["Home", "Products", "Restaurants", "Order Manager"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Order Manager"
          h3="Simplify and Optimize All Stages of your Order Processing with Wateen Order Manager"
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
          }}
        >
          Faster access and easier
        </p>
        <h2
          style={{
            fontSize: "3rem",
            color: "#52006A",
            fontWeight: "bolder",
            // fontFamily: "Nunito",
          }}
        >
          Shopping to All Suppliers in One App
        </h2>
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

export default OrderManager;
