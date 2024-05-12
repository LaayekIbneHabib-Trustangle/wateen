import React from "react";
import { AnimatedButton } from "../../components";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "10rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ padding: "0 2rem 0 2rem" }}>
            <p
              style={{
                color: "#FF7600",
                fontWeight: "600",
                fontSize: "1.5rem",
              }}
            >
              404 error
            </p>
            <h2
              style={{
                color: "#52006A",
                fontWeight: "600",
                fontSize: "5rem",
              }}
            >
              Page Not Found
            </h2>
            <p
              style={{
                color: "#667085",
                fontWeight: "400",
                fontSize: "1.3rem",
              }}
            >
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <NavLink to="/">
                <AnimatedButton name="Go Home" />
              </NavLink>
            </div>
          </div>
          <div style={{ padding: "0 2rem 0 2rem" }}>
            <img width="100%" src="/images/404.webp" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
