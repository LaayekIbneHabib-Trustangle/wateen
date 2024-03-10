import React from "react";
import { Box } from "./style";

const Brands = () => {
  return (
    <>
      <Box>
        <div>
          <h2>
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
            <img src="/images/hunger-station.svg" alt="" />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/talabat.svg"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/to-you.svg"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/jahez.svg"
              alt=""
            />
            <img
              style={{ marginRight: "4rem" }}
              src="/images/mr-sool.svg"
              alt=""
            />
          </div>
          <div className="logos-slide">
            <img src="/images/hunger-station.svg" alt="" />
            <img
              style={{ marginRight: "2rem" }}
              src="/images/talabat.svg"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/to-you.svg"
              alt=""
            />
            <img
              style={{ marginRight: "6rem" }}
              src="/images/jahez.svg"
              alt=""
            />
            <img
              style={{ marginRight: "4rem" }}
              src="/images/mr-sool.svg"
              alt=""
            />
          </div>
        </div>
      </Box>
    </>
  );
};

export default Brands;
