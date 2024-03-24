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

  const location = ["Home", "Products", "Restaurants", "Invoice Manager"];

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
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <p style={{ color: "#FF7600", fontSize: "1.3rem" }}>
              Wateen Invoice Manager
            </p>
            <h2 style={{ fontSize: "3rem", color: "#52006A" }}>
              Will Help You!
            </h2>
            <p style={{ color: "#393939", fontSize: "1.3rem" }}>
              Wateen Invoice Manager is a great tool for businesses of all
              sizes. It helps streamline the process of creating and managing
              invoices, which can save time and money. It also provides
              real-time tracking and analytics to help you keep track of
              payments and ensure accuracy. Finally, it can help you automate
              processes and boost customer satisfaction.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div style={{ marginTop: "-1rem", maxWidth: "45rem" }}>
              <ul style={{ listStyle: "none" }}>
                <li
                  style={{
                    marginTop: "1rem",
                    padding: "1.5rem .5rem 1.5rem 1.5rem",
                    backgroundColor: "rgba(255, 119, 1, 0.05)",
                    borderRadius: "2rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <img
                    style={{ height: "7rem" }}
                    src="/images/bar-orange.svg"
                    alt=""
                  />
                  <div>
                    <h3 style={{ color: "#52006A", fontSize: "1.5rem" }}>
                      Improves accuracy.
                    </h3>
                    <p style={{ color: "#555", fontSize: "1.25rem" }}>
                      Wateen invoice manager helps businesses produce accurate
                      invoices quickly and easily. This helps reduce costly
                      mistakes and improves customer satisfaction.
                    </p>
                  </div>
                </li>
                <li
                  style={{
                    marginTop: "1rem",
                    padding: "1.5rem .5rem 1.5rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <img
                    style={{ height: "7rem" }}
                    src="/images/bar-gray.svg"
                    alt=""
                  />
                  <div>
                    <h3 style={{ color: "#52006A", fontSize: "1.5rem" }}>
                      Enhances customer relationships.
                    </h3>
                    <p style={{ color: "#555", fontSize: "1.25rem" }}>
                      Wateen Invoice manager makes it easy to track customer
                      data and manage customer accounts. This helps businesses
                      stay organized and build better relationships with
                      customers.
                    </p>
                  </div>
                </li>
                <li
                  style={{
                    marginTop: "1rem",
                    padding: "1.5rem .5rem 1.5rem 1.5rem",
                    display: "flex",
                    gap: "1rem",
                  }}
                >
                  <img
                    style={{ height: "7rem" }}
                    src="/images/bar-gray.svg"
                    alt=""
                  />
                  <div>
                    <h3 style={{ color: "#52006A", fontSize: "1.5rem" }}>
                      Automates the billing process.
                    </h3>
                    <p style={{ color: "#555", fontSize: "1.25rem" }}>
                      Wateen Invoice manager automates the entire billing
                      process, from creating and sending invoices to tracking
                      payments. This eliminates manual labor and saves time and
                      money.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <img width="100%" src="/images/invoice-manager-main.svg" alt="" />
            </div>
          </div>
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
              // marginTop: "6rem",
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
