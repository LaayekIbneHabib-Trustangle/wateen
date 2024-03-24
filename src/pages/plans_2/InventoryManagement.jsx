import React, { useState } from "react";
import { Dropdown } from "../../components";

const InventoryManagement = () => {
  const [activeBtn, setActiveBtn] = useState("btn-1");

  const handleClick = (button) => {
    setActiveBtn(button);
  };

  return (
    <>
      <div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#52006A",
              fontWeight: "700",
              fontSize: "3rem",
              marginTop: "1rem",
            }}
          >
            Inventory Management
          </h2>
          <p
            style={{
              color: "#242424",
              fontWeight: "400",
              fontSize: "1.5rem",
              marginTop: "1rem",
            }}
          >
            Streamline your inventory processes and take control of your
            business with our flexible pricing plans. Choose the plan that suits
            your needs and unlock a world of efficiency.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            gap: "2rem",
            marginTop: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <p
              style={{
                color: "#183F30",
                fontWeight: "400",
                fontSize: "1.5rem",
              }}
            >
              Number of locations
            </p>
            <input
              type="number"
              name=""
              id=""
              min="1"
              style={{
                border: "1px solid #B3B3B3",
                maxWidth: "10rem",
                height: "4rem",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <div>
              <Dropdown />
            </div>
            <div
              style={{
                border: "1px solid #B3B3B3",
                borderRadius: "2rem",
              }}
            >
              <button
                onClick={() => handleClick("btn-1")}
                style={{
                  width: "10rem",
                  height: "4rem",
                  border: "0",
                  borderRadius: "2rem",
                  backgroundColor:
                    activeBtn == "btn-1" ? "#52006A" : "transparent",
                  color: activeBtn == "btn-1" ? "#ffffff" : "#000000",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => handleClick("btn-2")}
                style={{
                  width: "10rem",
                  height: "4rem",
                  border: "0",
                  borderRadius: "2rem",
                  backgroundColor:
                    activeBtn == "btn-2" ? "#52006A" : "transparent",
                  color: activeBtn == "btn-2" ? "#ffffff" : "#000000",
                }}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              backgroundImage: "url(/images/inventory-management-plan.svg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% auto",
              width: "100%",
              height: "205rem",
              marginTop: "5rem",
            }}
          >
            <div style={{ display: "flex", marginTop: "27rem" }}>
              <div
                style={{
                  textAlign: "center",
                  width: "26rem",
                }}
              ></div>
              <div
                style={{
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <button
                  style={{
                    width: "16.5rem",
                    height: "3.5rem",
                    border: "0",
                    borderRadius: "2rem",
                    backgroundColor: "#FF7600",
                    color: "white",
                    fontWeight: "700",
                    letterSpacing: ".1rem",
                  }}
                >
                  Select
                </button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <button
                  style={{
                    width: "16.5rem",
                    height: "3.5rem",
                    border: "0",
                    borderRadius: "2rem",
                    backgroundColor: "#ffffff",
                    color: "#52006A",
                    fontWeight: "700",
                    letterSpacing: ".1rem",
                    marginTop: ".35rem",
                  }}
                >
                  Select
                </button>
              </div>
              <div
                style={{
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <button
                  style={{
                    width: "16.5rem",
                    height: "3.5rem",
                    border: "0",
                    borderRadius: "2rem",
                    backgroundColor: "#FF7600",
                    color: "white",
                    fontWeight: "700",
                    letterSpacing: ".1rem",
                  }}
                >
                  Select
                </button>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "10rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  textAlign: "center",
                  width: "26rem",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#faf9ec",
                    width: "10rem",
                    height: "5rem",
                  }}
                >
                  <h2 style={{ color: "#52006A", fontSize: "1.75rem" }}>
                    Monthly
                  </h2>
                  <h2 style={{ color: "#FF7600", fontSize: "1.75rem" }}>
                    250 SAR
                  </h2>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#f9f1e4",
                    width: "10rem",
                    height: "5rem",
                  }}
                >
                  <h2 style={{ color: "#52006A", fontSize: "1.75rem" }}>
                    Monthly
                  </h2>
                  <h2 style={{ color: "#FF7600", fontSize: "1.75rem" }}>
                    350 SAR
                  </h2>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "5rem",
                  textAlign: "center",
                  width: "26rem",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#faf9ec",
                    width: "10rem",
                    height: "5rem",
                  }}
                >
                  <h2 style={{ color: "#52006A", fontSize: "1.75rem" }}>
                    Monthly
                  </h2>
                  <h2 style={{ color: "#FF7600", fontSize: "1.75rem" }}>
                    450 SAR
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryManagement;
