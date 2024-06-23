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
                fontSize: "2.2rem",
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
              Under Maintenance
            </h2>
            <p
              style={{
                color: "#667085",
                fontWeight: "400",
                fontSize: "1.8rem",
                width: '80%',
                marginTop: '15px',
              }}
            >
              Sorry, the page you are looking for doesn't exist or has been
              moved.
            </p>
            <div style={{ marginTop: "2rem" }}>
              <NavLink to="/">
                <AnimatedButton name="Back Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" />
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
