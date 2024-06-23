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

const InventoryManagement = () => {
  const images = [
    "/images/accurate-inventory-tracking.webp",
    "/images/minimizing-costs-maximizing-profits.webp",
    "/images/real-time-inventory-monitoring.webp",
    "/images/efficient-replenishment-processes.webp",
    "/images/obsolete-inventory-reduction.webp",
    "/images/cost-effective-inventory-system.webp",
    "/images/accurate-inventory-records.webp",
    "/images/enhanced-oversight.webp",
    "/images/optimal-stock-levels.webp",
    "/images/inventory-data-analysis.webp",
  ];

  const captions = [
    "Accurate Inventory Tracking",
    "Minimizing Costs, Maximizing Profits",
    "Real-Time Inventory Monitoring",
    "Efficient Replenishment Processes",
    "Obsolete Inventory Reduction",
    "Cost-Effective Inventory System",
    "Accurate Inventory Records",
    "Enhanced Oversight",
    "Optimal Stock Levels",
    "Inventory Data Analysis",
  ];

  const forAlternateCards = {
    wateenInventoryManagement: {
      caption: "will help you!",
      heading: "Wateen Inventory Management",
      details:
        "Wateen Inventory management is the process of ordering, storing, and using a company’s inventory of products. It is an essential part of supply chain management that ensures a company has the right amount of products to meet customer demand. Effective inventory management involves tracking inventory levels, determining when to restock, and keeping accurate records of transactions. The goal of Wateen inventory management is to maintain an optimal inventory balance that keeps costs low and customer satisfaction high.",
      image: "/images/wateen-inventory-management.webp",
    },

    increasedProfits: {
      heading: "Increased Profits",
      details:
        "With improved efficiency and accuracy, you can increase profits by reducing the costs associated with managing inventory.",
      image: "/images/increased-profits.webp",
    },

    reducedInventoryCosts: {
      heading: "Reduced Inventory Costs",
      details:
        "By managing inventory more efficiently, you can reduce inventory costs, as you don’t need to over-stock or under-stock items.",
      image: "/images/reduced-inventory-costs.webp",
    },

    improvedEfficiency: {
      heading: "Improved Efficiency",
      details:
        "Wateen Inventory management system helps streamline processes and reduce the amount of time it takes to manage and track inventory. This can lead to improved efficiency and lower costs.",
      image: "/images/improved-efficiency.webp",
    },
  };

  const location = ["Home", "Products", "Restaurants", "Inventory Management"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Inventory Management"
          h3="Eliminate Inventory Hassles with Easy-to-Use Management Software!"
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
          Wateen Inventory Management
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

export default InventoryManagement;
