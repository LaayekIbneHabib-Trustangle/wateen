import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Wrapper, HeroSecondary } from "../../components";
import "./style.css";

const Plans = () => {
  const [activeButton, setActiveButton] = useState(null);
  const location = useLocation();

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Plans"
          h3="Let us Help Your Business Thrive"
        />
      </section>
      <section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              margin: "2.5rem 0 2.5rem 0",
            }}
          >
            <button
              className={`toggle-btn ${
                activeButton === "button1" ? "toggle-btn-active" : ""
              }`}
              onClick={() => handleClick("button1")}
            >
              Inventory Management
            </button>
            <button
              className={`toggle-btn ${
                activeButton === "button2" ? "toggle-btn-active" : ""
              }`}
              onClick={() => handleClick("button2")}
            >
              Marketplace
            </button>
          </div>
        </Wrapper>
      </section>
      <Wrapper>
        {activeButton === "button1" ? (
          <section
            style={{
              margin: "2.5rem 0 55rem 0",
            }}
          >
            <h2
              style={{
                color: "#52006A",
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "700",
              }}
            >
              Inventory Management
            </h2>
            <p
              style={{
                color: "#242424",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "400",
              }}
            >
              Streamline your inventory processes and take control of your
              business with our flexible pricing plans. Choose the plan that
              suits your needs and unlock a world of efficiency.
            </p>
            <div
              style={{
                position: "relative",
                display: "inline-block",
              }}
            >
              <button
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "38.2%",
                  transform: "translate(-50%, -50%)",
                  width: "20vw",
                  height: "16vh",
                  color: "#FFF",
                  background: "transparent",
                  border: "0",
                  borderRadius: "1rem",
                  fontWeight: "700",
                }}
              ></button>
              <button
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "62.9%",
                  transform: "translate(-50%, -50%)",
                  width: "19.5vw",
                  height: "16vh",
                  color: "#FFF",
                  background: "transparent",
                  border: "0",
                  borderRadius: "1rem",
                  fontWeight: "700",
                }}
              ></button>
              <button
                style={{
                  position: "absolute",
                  top: "15%",
                  left: "87.6%",
                  transform: "translate(-50%, -50%)",
                  width: "20vw",
                  height: "16vh",
                  color: "#FFF",
                  background: "transparent",
                  border: "0",
                  borderRadius: "1rem",
                  fontWeight: "700",
                }}
              ></button>
              <img
                style={{
                  marginTop: "5rem",
                  width: "100%",
                  height: "auto",
                }}
                width="100%"
                src="/images/inventory-management-plan.svg"
                alt=""
              />
            </div>
          </section>
        ) : (
          <section
            style={{
              margin: "5rem 0 55rem 0",
            }}
          >
            <h1>Hello</h1>
          </section>
        )}
      </Wrapper>
    </>
  );
};

export default Plans;
