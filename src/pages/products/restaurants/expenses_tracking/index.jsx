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

const ExpensesTracking = () => {
  const images = [
    "/images/budget-optimization.svg",
    "/images/clear-financial-picture.svg",
    "/images/increase-savings.svg",
    "/images/better-spending-habits.svg",
    "/images/improve-credit-score.svg",
  ];

  const captions = [
    "Budget optimization",
    "Clear Financial Picture",
    "Increase Savings",
    "Better Spending Habits",
    "Improve Credit Score",
  ];

  const forAlternateCards = {
    wateenExpensesTracking: {
      caption: "will help you!",
      heading: "Wateen Expenses Tracking",
      details:
        "Wateen Expense Tracking software is an essential tool for businesses of any size. It allows companies to accurately track their spending, identify areas of inefficiency, and develop strategies to reduce costs. By monitoring all expenses, businesses can quickly spot areas where money is being wasted, or where costs can be reduced. This information can then be used to make informed decisions about the best way to allocate resources. Furthermore, the data collected by expense tracking software can be used to demonstrate to stakeholders the value of investments, and to uncover opportunities for improvement. By keeping careful track of their expenses, companies can ensure that their money is being spent in the most effective and efficient way possible.",
      image: "/images/wateen-expenses-tracking.svg",
    },

    automatedAlerts: {
      heading: "Automated Alerts",
      details:
        "Expense tracking software can be set up to send automated alerts when an expense reaches a certain threshold. This allows businesses to stay on top of their expenses and take action when necessary.",
      image: "/images/automated-alerts.svg",
    },

    betterVisibility: {
      heading: "Better Visibility",
      details:
        "Expense tracking software provides a comprehensive view of expenses and can generate reports in real time. This allows managers and business owners to have better visibility into their expenses and make informed decisions.",
      image: "/images/better-visibility.svg",
    },

    costSavings: {
      heading: "Cost Savings",
      details:
        "The automated process of tracking expenses eliminates the need for manual data entry, which saves costs associated with hiring additional staff.",
      image: "/images/cost-savings.svg",
    },
  };

  const location = ["Home", "Products", "Expenses Tracking"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Expenses Tracking"
          h3="Get Your Expenses in Order with Easy Tracking!"
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
          Wateen Expenses Tracking Software
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

export default ExpensesTracking;
