import React, { useState } from "react";
import { Wrapper } from "../../components";
import "./style.css";

const RequestADemo = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <Wrapper>
          <div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "#52006A", fontSize: "4rem" }}>
                Request a Demo
              </h2>
              <p
                style={{
                  color: "#000",
                  fontSize: "1.4rem",
                  margin: "1rem 0 1rem 0",
                }}
              >
                Take your operations online. One of our team members will
                demonstrate how Wateen can save your business hours each week
                and thousands of dollars every year.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1rem",
                  margin: "2rem 0 2rem 0",
                }}
              >
                <p
                  style={{
                    color: "#52006A",
                    fontSize: "1.3rem",
                    fontWeight: isToggled ? "700" : "400",
                  }}
                >
                  Restaurants
                </p>
                <button
                  onClick={handleToggle}
                  style={{
                    border: "0",
                    background: "none",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {isToggled ? (
                    <img src="/images/toggle-button.svg" alt="" />
                  ) : (
                    <img
                      style={{ transform: "scale(-1)" }}
                      src="/images/toggle-button.svg"
                      alt=""
                    />
                  )}
                </button>
                <p
                  style={{
                    color: "#52006A",
                    fontSize: "1.3rem",
                    fontWeight: !isToggled ? "700" : "400",
                  }}
                >
                  Distributors
                </p>
              </div>
            </div>
            <div>
              <form action="">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: "100%",
                    gap: "1rem",
                    margin: "0 0 3rem 0",
                    justifyContent: "center",
                  }}
                >
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="Business Name"
                    type="text"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="Business Email"
                    type="email"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="First Name"
                    type="text"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="Last Name"
                    type="text"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="Phone Number"
                    type="tel"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="City"
                    type="text"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="Type of Business>"
                    type="text"
                  />
                  <input
                    style={{
                      width: "49.5%",
                      background: "#E7E5EA",
                      border: "0",
                      borderRadius: "1rem",
                      padding: "0 0 0 2rem",
                      height: "4rem",
                    }}
                    placeholder="What can we help you with?"
                    type="text"
                  />
                </div>
                <button
                  style={{
                    width: "100%",
                    height: "3rem",
                    borderRadius: "1rem",
                    border: "0",
                    background: "#FF7600",
                    color: "white",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default RequestADemo;
