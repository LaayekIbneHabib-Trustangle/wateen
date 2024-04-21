import React from "react";
import { Wrapper } from "../../components";
import "./style.css";

const Login = () => {
  return (
    <>
      <section style={{ margin: "5rem 0 55rem 0" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5rem",
              flexWrap: "wrap-reverse",
            }}
          >
            <div className="primary" style={{ width: "47.5%" }}>
              <h2
                style={{
                  color: "#52006A",
                  fontSize: "3.5rem",
                  fontWeight: "700",
                }}
              >
                Let's Sign You In
              </h2>
              <p
                style={{
                  color: "#594D6D",
                  fontSize: "1.3rem",
                  fontWeight: "600",
                }}
              >
                Welcome back, you've been missed!
              </p>
              <form
                style={{
                  margin: "3rem 0 0 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
                action=""
              >
                <input
                  style={{
                    background: "#E7E5EA",
                    border: "0",
                    borderRadius: "1rem",
                    padding: "0 0 0 5rem",
                    height: "4rem",
                    backgroundImage: "url(/images/your-email.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "2rem .8rem",
                  }}
                  type="email"
                  placeholder="Your email"
                />
                <input
                  style={{
                    background: "#E7E5EA",
                    border: "0",
                    borderRadius: "1rem",
                    padding: "0 0 0 5rem",
                    height: "4rem",
                    backgroundImage: "url(/images/your-password.webp)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "2rem .8rem",
                  }}
                  type="password"
                  placeholder="Your password"
                />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <input className="checkbox" type="checkbox" />
                    <p
                      style={{
                        fontWeight: "700",
                        color: "#242424",
                        fontSize: "1.2rem",
                      }}
                    >
                      Remember Me
                    </p>
                  </div>
                  <p
                    style={{
                      fontWeight: "700",
                      color: "#242424",
                      fontSize: "1.2rem",
                    }}
                  >
                    Forgot Password?
                  </p>
                </div>
                <button
                  style={{
                    width: "100%",
                    height: "3.5rem",
                    borderRadius: "1rem",
                    border: "0",
                    background: "#FF7600",
                    color: "white",
                  }}
                >
                  Sign In
                </button>
              </form>
              <p
                style={{
                  color: "#594D6D",
                  fontWeight: "700",
                  fontSize: "1.2rem",
                  margin: "2rem 0 0 0",
                }}
              >
                Don't have an account?{" "}
                <span
                  style={{
                    color: "#FF7600",
                    fontWeight: "700",
                    fontSize: "1.2rem",
                  }}
                >
                  Sign Up
                </span>
              </p>
            </div>
            <div className="secondary" style={{ width: "47.5%" }}>
              <img
                style={{
                  borderRadius: "2rem",
                  width: "100%",
                }}
                src="/images/wateen-wallpaper.webp"
                alt=""
              />
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default Login;
