import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  RequestADemo,
  Benefits,
} from "../../../../components";

const InvoiceManager = () => {
  const images = [
    "/images/streamline-invoice-management.svg",
    "/images/enhancing-efficiency-&-accuracy.svg",
    "/images/automate-invoicing.svg",
    "/images/error-free-invoicing.svg",
    "/images/secure-invoice-management.svg",
    "/images/intuitive-invoice-management.png",
    "/images/insightful-invoice-reporting.svg",
    "/images/collaborative-invoicing.svg",
    "/images/secure-invoice-integration.png",
    "/images/auto-invoice-generation.svg",
  ];

  const captions = [
    "Streamline Invoice Management",
    "Enhancing Efficiency and Accuracy",
    "Automate Invoicing",
    "Error-Free Invoicing",
    "Secure Invoice Management",
    "Intuitive Invoice Management",
    "Insightful Invoice Reporting",
    "Collaborative Invoicing",
    "Secure Invoice Integration",
    "Auto-Invoice Generation",
  ];

  const location = ["Home", "Products", "Invoice Manager"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Invoice Manager"
          h3="Manage Your Finances Easily with an Invoice Manager"
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
          Wateen Cookbook Software
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
          {/* <AlternateCards forAlternateCards={forAlternateCards} /> */}
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

export default InvoiceManager;
