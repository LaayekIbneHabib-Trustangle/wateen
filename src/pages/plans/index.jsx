import React, { useState } from "react";
import { Wrapper, HeroSecondary } from "../../components";
import RequestADemo from "../../components/request-a-demo";
import "./style.css";

const Plans = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [activeButton2, setActiveButton2] = useState("monthly");
  const [number, setNumber] = useState("1");
  const [currency, setCurrency] = useState("SAR");

  const location = ["Home", "Plans"];

  const handleClick = (button) => {
    setActiveButton(button);
  };

  const handleClick2 = (button) => {
    setActiveButton2(button);
  };

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const handleChangeCurrency = (e) => {
    setCurrency(e.target.value);
  };

  const convertToSar = (usdAmount) => {
    // You can replace this with your actual conversion logic
    return usdAmount * 3.75;
  };

  const convertToUsd = (sarAmount) => {
    // You can replace this with your actual conversion logic
    return sarAmount / 3.75;
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
              style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5rem 0 0 0",
                  flexWrap: "wrap",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2rem" }}
                >
                  <p style={{ fontSize: "1.2rem" }}>Number of locations</p>
                  <input
                    style={{ width: "7.5rem", height: "4rem", padding: "1rem" }}
                    type="number"
                    value={number}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <select
                    style={{ width: "7.5rem", height: "4rem" }}
                    id="currencies"
                    value={currency}
                    onChange={handleChangeCurrency}
                  >
                    <option value="USD">🇺🇸 USD</option>
                    <option value="SAR">🇸🇦 SAR</option>
                  </select>
                  <div
                    style={{ border: "1px solid black", borderRadius: "2rem" }}
                  >
                    <button
                      style={{
                        padding: ".75rem 2.75rem .75rem 2.75rem",
                        borderRadius: "2rem",
                        border: "0",
                        height: "4rem",
                        width: "10rem",
                        background:
                          activeButton2 === "monthly" ? "#52006A" : "none",
                        color: activeButton2 === "monthly" ? "white" : "black",
                      }}
                      onClick={() => handleClick2("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      style={{
                        padding: ".75rem 2.75rem .75rem 2.75rem",
                        height: "4rem",
                        width: "10rem",
                        borderRadius: "2rem",
                        border: "0",
                        background:
                          activeButton2 === "yearly" ? "#52006A" : "none",
                        color: activeButton2 === "yearly" ? "white" : "black",
                      }}
                      onClick={() => handleClick2("yearly")}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "5rem 0 0 0",
                }}
              >
                <img
                  width="100%"
                  src="images/inventory-management-plan.webp"
                  alt=""
                />
              </div>
            </div>
          </section>
        ) : (
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
              Marketplace
            </h2>
            <p
              style={{
                color: "#242424",
                textAlign: "center",
                fontSize: "1.5rem",
                fontWeight: "400",
              }}
            >
              Spend Like Nothing, Unleash the Power of Pocket Change in Our Marketplace!
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5rem 0 0 0",
                  flexWrap: "wrap",
                  gap: "2rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "2rem" }}
                >
                  <p style={{ fontSize: "1.2rem" }}>Number of locations</p>
                  <input
                    style={{ width: "7.5rem", height: "4rem", padding: "1rem" }}
                    type="number"
                    value={number}
                    onChange={handleChange}
                    min="1"
                  />
                </div>
                <div style={{ display: "flex", gap: "2rem" }}>
                  <select
                    style={{ width: "7.5rem", height: "4rem" }}
                    id="currencies"
                    value={currency}
                    onChange={handleChangeCurrency}
                  >
                    <option value="USD">🇺🇸 USD</option>
                    <option value="SAR">🇸🇦 SAR</option>
                  </select>
                  <div
                    style={{ border: "1px solid black", borderRadius: "2rem" }}
                  >
                    <button
                      style={{
                        padding: ".75rem 2.75rem .75rem 2.75rem",
                        borderRadius: "2rem",
                        border: "0",
                        height: "4rem",
                        width: "10rem",
                        background:
                          activeButton2 === "monthly" ? "#52006A" : "none",
                        color: activeButton2 === "monthly" ? "white" : "black",
                      }}
                      onClick={() => handleClick2("monthly")}
                    >
                      Monthly
                    </button>
                    <button
                      style={{
                        padding: ".75rem 2.75rem .75rem 2.75rem",
                        height: "4rem",
                        width: "10rem",
                        borderRadius: "2rem",
                        border: "0",
                        background:
                          activeButton2 === "yearly" ? "#52006A" : "none",
                        color: activeButton2 === "yearly" ? "white" : "black",
                      }}
                      onClick={() => handleClick2("yearly")}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "2rem",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3rem",
                    background: "#F8F8F8",
                    flexGrow: "1",
                    borderRadius: "2rem",
                    padding: "2rem",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      color: "#52006A",
                      fontSize: "2rem",
                    }}
                  >
                    Suppliers
                  </h3>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      style={{
                        color: "#FF7600",
                        fontSize: "2rem",
                      }}
                    >
                      {activeButton2 === "yearly"
                        ? currency === "SAR"
                          ? 12 * 270 * number
                          : (12 * 270 * number) / 3.75
                        : currency === "SAR"
                        ? 270 * number
                        : (270 * number) / 3.75}
                      .00
                    </h3>
                    <p
                      style={{
                        color: "black",
                      }}
                    >
                      Per Transaction
                    </p>
                  </span>
                  <button
                    style={{
                      background: "rgba(255, 118, 0, .1)",
                      border: "0",
                      padding: "1.5rem 4rem 1.5rem 4rem",
                      borderRadius: "1rem",
                      color: "#FF7600",
                      fontWeight: "700",
                    }}
                  >
                    Choose
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3rem",
                    background: "#52006A",
                    flexGrow: "1",
                    borderRadius: "2rem",
                    padding: "2rem",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                  }}
                >
                  <h3
                    style={{
                      color: "white",
                      fontSize: "2rem",
                    }}
                  >
                    Buyers
                  </h3>
                  <span
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <h3
                      style={{
                        color: "#FF7600",
                        fontSize: "2rem",
                      }}
                    >
                      {activeButton2 === "yearly"
                        ? currency === "SAR"
                          ? 12 * 270 * number
                          : (12 * 270 * number) / 3.75
                        : currency === "SAR"
                        ? 270 * number
                        : (270 * number) / 3.75}
                      .00
                    </h3>
                    <p
                      style={{
                        color: "white",
                      }}
                    >
                      Per Transaction
                    </p>
                  </span>
                  <button
                    style={{
                      background: "white",
                      border: "0",
                      padding: "1.5rem 4rem 1.5rem 4rem",
                      borderRadius: "1rem",
                      color: "#52006A",
                      fontWeight: "700",
                    }}
                  >
                    Choose
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}
      </Wrapper>
    </>
  );
};

export default Plans;
