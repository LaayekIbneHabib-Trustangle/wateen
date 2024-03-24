import React, { useState } from "react";
import { HeroSecondary, Wrapper } from "../../components";
import InventoryManagement from "./InventoryManagement";
import Marketplace from "./marketplace";

const Plans_2 = () => {
  const [activeBtn, setActiveBtn] = useState("btn-1");
  const location = ["Home", "Plans"];

  const handleClick = (button) => {
    setActiveBtn(button);
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
              margin: "2.5rem 0 0 0",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={() => handleClick("btn-1")}
              style={{
                width: "20rem",
                height: "4rem",
                borderRadius: "2rem",
                fontWeight: "600",
                letterSpacing: ".1rem",
                border: "1px solid #FF32D7",
                backgroundColor:
                  activeBtn == "btn-1" ? "#52006A" : "transparent",
                color: activeBtn == "btn-1" ? "#ffffff" : "#000000",
              }}
            >
              Inventory Management
            </button>
            <button
              onClick={() => handleClick("btn-2")}
              style={{
                width: "20rem",
                height: "4rem",
                borderRadius: "2rem",
                fontWeight: "600",
                letterSpacing: ".1rem",
                border: "1px solid #FF32D7",
                backgroundColor:
                  activeBtn == "btn-2" ? "#52006A" : "transparent",
                color: activeBtn == "btn-2" ? "#ffffff" : "#000000",
              }}
            >
              Marketplace
            </button>
          </div>
        </Wrapper>
      </section>
      <section style={{ margin: "0 0 55rem 0" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              margin: "2.5rem 0 0 0",
            }}
          >
            {activeBtn == "btn-1" ? <InventoryManagement /> : <Marketplace />}
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Plans_2;
