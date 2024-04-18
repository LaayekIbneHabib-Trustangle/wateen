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
            <img src="/images/hunger-station.webp" alt="" />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/talabat.webp"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/to-you.webp"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/jahez.webp"
              alt=""
            />
            <img
              style={{ marginRight: "4rem" }}
              src="/images/mr-sool.webp"
              alt=""
            />
          </div>
          <div className="logos-slide">
            <img src="/images/hunger-station.webp" alt="" />
            <img
              style={{ marginRight: "1rem" }}
              src="/images/talabat.webp"
              alt=""
            />
            <img
              style={{ marginRight: "3rem" }}
              src="/images/to-you.webp"
              alt=""
            />
            <img
              style={{ marginRight: "3rem" }}
              src="/images/jahez.webp"
              alt=""
            />
            <img
              style={{ marginRight: "10rem" }}
              src="/images/mr-sool.webp"
              alt=""
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Brands;
