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

const PurchasingAndOrderManagement = () => {
  const images = [
    "/images/procurement-cost-savings.webp",
    "/images/swift-response-to-requests.webp",
    "/images/efficient-reordering-system.webp",
    "/images/purchasing-and-demand-analysis.webp",
    "/images/tracking-and-reporting-kpis.webp",
    "/images/automated-order-and-inventory-tracking.webp",
    "/images/regulatory-compliance-assurance.webp",
    "/images/timely-delivery-assurance.webp",
    "/images/quality-control-procedures.webp",
    "/images/collaborative-relationship-building.webp",
  ];

  const captions = [
    "Procurement Cost Savings",
    "Swift Response to Requests",
    "Efficient Reordering System",
    "Purchasing and Demand Analysis",
    "Tracking and Reporting KPIs",
    "Automated Order and Inventory Tracking",
    "Regulatory Compliance Assurance",
    "Timely Delivery Assurance",
    "Quality Control Procedures",
    "Collaborative Relationship Building",
  ];

  const forAlternateCards = {
    wateenPurchasingAndOrderingManagement: {
      caption: "will help you!",
      heading: "Wateen Purchasing and Ordering Management",
      details:
        "Wateen Purchasing and Ordering Management is a great way to streamline and optimize the purchasing process. With it, businesses can track orders, monitor inventory, reduce costs, and improve customer service. It also helps ensure that all orders are processed quickly and accurately, ensuring that customers get their products in a timely manner.",
      image: "/images/wateen-purchasing-and-ordering-management.webp",
    },

    improvedSupplyChainManagement: {
      heading: "Improved Supply Chain Management",
      details:
        "Through the use of Wateen Purchasing and Ordering management systems, companies can improve their supply chain management and ensure the right products are delivered on time.",
      image: "/images/improved-supply-chain-management.webp",
    },

    enhancedCustomerService: {
      heading: "Enhanced Customer Service",
      details:
        "Ordering and purchasing management systems can help streamline customer service processes, providing customers with faster order tracking and customer service.",
      image: "/images/enhanced-customer-service.webp",
    },

    increasedVisibility: {
      heading: "Increased Visibility",
      details:
        "By having a centralized platform for managing orders and inventory, you can gain greater visibility into all aspects of the purchasing and ordering process, including suppliers, orders, inventory, and financials.",
      image: "/images/increased-visibility-POM.webp",
    },
  };

  const location = [
    "Home",
    "Products",
    "Restaurants",
    "Purchasing & Order Management",
  ];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Purchasing and Ordering Management"
          h3="Maximizing Efficiency Wateen Purchasing and Ordering Management"
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
          Wateen Purchasing and Ordering Management
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

export default PurchasingAndOrderManagement;
