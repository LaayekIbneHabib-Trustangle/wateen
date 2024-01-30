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

const RestaurantManagementSoftware = () => {
  const location = useLocation();

  const images = [
    "/images/boosting-restaurant-efficiency.svg",
    "/images/user-friendly-system.svg",
    "/images/streamlining-employee-management.svg",
    "/images/secure-order-tracking.svg",
    "/images/amplifying-restaurant-visibility.svg",
    "/images/strengthend-data-security.svg",
    "/images/compliance-assurance.svg",
  ];

  const captions = [
    "Boosting Restaurant Efficiency",
    "User-Friendly System",
    "Streamlining Employee Management",
    "Secure Order Tracking",
    "Amplifying Restaurant Visibility",
    "Strengthened Data Security",
    "Compliance Assurance",
  ];

  const forAlternateCards = {
    wateenRestaurantManagementSoftwareWillHelpYou: {
      heading: "Wateen Restaurant Management Software will Help you!",
      details:
        "Wateen Restaurant management software can be a great tool for restaurant owners and managers to help them run their businesses more efficiently. This software can help streamline operations and make the day-to-day tasks of running a restaurant easier. With the use of Wateen restaurant management software, owners and managers can easily track inventory, manage employee schedules, and keep track of customer orders. This software can also help with menu planning, pricing, and promotions, and even help create customer loyalty programs. Restaurant management software can be a great asset to any restaurant business, as it can help make operations smoother and more efficient.",
      image: "/images/wateen-restaurant-management-software-will-help-you.svg",
    },

    improvedEfficiency: {
      heading: "Improved Efficiency",
      details:
        "Wateen Restaurant management software helps streamline restaurant processes, from ordering and inventory management to payroll and customer relationship management. This more efficient operation leads to faster service and more satisfied customers.",
      image: "/images/improved-efficiency.svg",
    },

    comprehensiveReporting: {
      heading: "Comprehensive Reporting",
      details:
        "Wateen Restaurant management software offers comprehensive reporting capabilities that allow owners to view detailed information about their business operations. This can help them identify areas for improvement and make informed decisions to increase profits and efficiency.",
      image: "/images/comprehensive-reporting.svg",
    },

    costSavings: {
      heading: "Cost Savings",
      details:
        "Wateen Restaurant management software helps restaurants save money by reducing inventory costs and providing more accurate and timely ordering. This software can also help reduce labor costs by streamlining employee scheduling.",
      image: "/images/cost-savings2.svg",
    },
  };

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Restaurant Management Software"
          h3="Unlock the Power of Restaurant Management with Wateen Restaurant Management Software"
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

export default RestaurantManagementSoftware;
