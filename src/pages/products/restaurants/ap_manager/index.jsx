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
// import { Section } from "./style";

const APManager = () => {
  const images = [
    "/images/paperless-ap.svg",
    "/images/suppliers-engagement.svg",
    "/images/same-day-approval.svg",
    "/images/discounted-payments.svg",
    "/images/on-the-go-invoice-approvals.svg",
  ];

  const captions = [
    "Paperless AP",
    "Suppliers Engagement",
    "Same-Day Approval",
    "Discounted Payments",
    "On-the-Go Invoice Approvals",
  ];

  const forAlternateCards = {
    wateenAPManager: {
      caption: "will help you!",
      heading: "Wateen AP Manager",
      details:
        "Effective Account Payable (AP) Manager can have a positive impact on the entire company. Prompt payment to suppliers helps the company maintain strong relationships with vendors and avoid issues such as delayed shipment of supplies and late payment fees. Account payable dashboard like wateen’s one helps the accounts payable team keep tabs on key metrics and analyze issues so they can keep the payment process running smoothly and efficient.",
      image: "/images/wateen-ap-manager.svg",
    },

    clearVisibility: {
      heading: "Clear Visibility",
      details: [
        "Full visibility of all payments related to suppliers.",
        "View transaction history and status by supplier.",
        "Track credit notes and payments due.",
        "Look at the history of credits issued and used.",
      ],
      image: "/images/clear-visibility.svg",
    },

    easierPaymentProcess: {
      heading: "Easier Payment Process",
      details: [
        "Manage all your supplier payments through one app.",
        "Pay with your choice of credit card or ACH/EFT.",
        "Schedule automated payments & instalments for added convenience.",
        "View, register and pay with available credits.",
      ],
      image: "/images/easier-payment-process.svg",
    },

    workflowApprovals: {
      heading: "Workflow Approvals",
      details: [
        "Payments can be approved by a single user, or set so that the employee can request approval from the manager.",
        "Pay with your choice of credit card or ACH/EFT.",
        "Email notifications when employees request approval.",
        "View orders and status in your dashboard",
      ],
      image: "/images/workflow-approvals.svg",
    },
  };

  const location = ["Home", "Products", "AP Manager"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="AP Manager"
          h3="Get Better Control Over Upcoming Costs and Full Visibility into Approval Cycle with Wateen AP Manager"
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
          Wateen AP Manager
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#52006A",
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

export default APManager;
