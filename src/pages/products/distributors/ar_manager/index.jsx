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

const ARManager = () => {
  const images = [
    "/images/Reduce-AR-Aging.webp",
    "/images/Improve-Cash-Flow.webp",
    "/images/Enhance-Billing-Accuracy.webp",
    "/images/Strengthen-Credit-and-Collections-Policies.webp",
    "/images/Optimize-AR-Reporting-and-Analysis.webp",
    "/images/Foster-Customer-Relationships.webp",
    "/images/Implement-Automation-and-Technology-Solutions.webp",
    "/images/Ensure-Compliance-and-Audit-Readiness.webp",
  ];

  const captions = [
    "Reduce AR Aging",
    "Improve Cash Flow",
    "Enhance Billing Accuracy",
    "Strengthen Credit and Collections Policies",
    "Optimize AR Reporting and Analysis",
    "Foster Customer Relationships",
    "Implement Automation and Technology Solutions",
    "Ensure Compliance and Audit Readiness",
  ];

  const forAlternateCards = {
    wateenSoftwareSoftware: {
      heading: "Wateen AR Manager will help you!",
      details: 
        "The Accounts Receivable Manager is vital for Wateen, As an Online Marketplace & Inventory Management Platform. It efficiently handles payment collection, improving cash flow and profitability while reducing bad debts. It also prioritizes customer relationships by promptly addressing payment inquiries, making them crucial for Wateen's financial stability and growth.",
      image: "/images/AR-Manager-will-help-you.webp",
    },

    clearVisibility: {
      heading: "Enhanced Clarity",
      details: [
        "Improved cash flow and reduced bad debts.",
        "Promptly addresses customer payment inquiries.",
        "Essential for financial stability and growth.",
      ],
      image: "/images/Enhanced-Clarity.webp",
    },

    increasedEfficiency: {
      heading: "Hassle-free Payment",
      details: [
        "Wateen AR Manager streamlines payment process.",
        "Simplifies and accelerates payment collection.",
        "Enhances customer experience.",
        "Contributes to efficient financial operations.",
      ],
      image: "/images/Hassle-free-Payment.webp",
    },

    customizationOptions: {
      heading: "Streamlined Approval Process",
      details: [
        "Wateen AR Manager streamlines workflow approvals.",
        "Ensures timely and accurate approvals",
        "Facilitates smooth financial operations.",
        "Integrates with your systems directly.",
      ],
      image: "/images/Streamlined-Approval-Process.webp",
    },
  };

  const location = ["Home", "Products", "Distributors", "AR Manager"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="AR Manager"
          h3={<p>Trust Us with Your Data Entry <br />
            Experience Seamless AR Processing with Automation.</p>}
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
            fontSize: "1.7rem",
            color: "#FF7600",
          }}
        >
          Wateen Accounts Receivable Automation
        </p>
        <h1
          style={{
            fontfamily: "Nunito",
            fontSize: "2.5rem",
            fontWeight: "500",
            lineHeight: "30px",
            textAlign: "center",
            color: "#52006A",
          }}
        >
          Save Hours Each Week by Automating Data Entry and Card Processing, While Giving
          <br />
          Customers More Convenient Ways to Pay.
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

export default ARManager;
