import React from "react";
import { Box } from "./style";

const Brands = () => {
  return (
    <>
      <Box>
        <div>
          <h2 style={{ marginBottom: "-3rem" }}>
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              Integrates{" "}
            </span>
            with your systems directly
          </h2>
        </div>
        <div className="logos">
          <div className="logos-slide">
            <img
              src="/images/micros.webp"
              alt=""
            />
            <img
              src="/images/Simphony-POS.webp"
              alt=""
            />
            <img
              src="/images/Foodics.webp"
              alt=""
            />
            <img
              src="/images/Oracle-NetSuite.webp"
              alt=""
            />
            <img
              src="/images/oracle-fusion.webp"
              alt=""
            />
            <img 
              style={{ marginRight: "1rem" }}
              src="/images/SAP.webp"
              alt=""
            />
          </div>
          <div className="logos-slide">
            <img
              src="/images/micros.webp"
              alt=""
            />
            <img
              src="/images/Simphony-POS.webp"
              alt=""
            />
            <img
              src="/images/Foodics.webp"
              alt=""
            />
            <img
              src="/images/Oracle-NetSuite.webp"
              alt=""
            />
            <img
              src="/images/oracle-fusion.webp"
              alt=""
            />
            <img 
              style={{ marginRight: "1rem" }}
              src="/images/SAP.webp"
              alt=""
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Brands;
