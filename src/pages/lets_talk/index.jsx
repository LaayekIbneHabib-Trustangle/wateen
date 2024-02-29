import React from "react";
import { HeroSecondary, Wrapper } from "../../components";
import { useLocation } from "react-router-dom";

const LetsTalk = () => {
  const location = useLocation();
  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Let's Talk"
          h3="We'd love to hear from you , Our friendly team is always here to chat."
        />
      </section>
      <section style={{ margin: "5rem  0 55rem 0" }}>
        <Wrapper>
          <div
            style={{
              border: "1px solid gray",
              padding: "2rem",
              borderRadius: "2rem",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#52006A",
                  fontSize: "5rem",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Get in touch
              </h2>
              <p
                style={{
                  color: "#000",
                  fontSize: "1.4rem",
                  fontWeight: "400",
                  textAlign: "center",
                }}
              >
                We'd love to hear from you. Please fill out this form.
              </p>
            </div>
            <div
              style={{
                margin: "2.5rem 0 0 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <input
                  style={{
                    background: "#E7E5EA",
                    border: "0",
                    borderRadius: "1rem",
                    padding: "0 0 0 2rem",
                    height: "4rem",
                    width: "calc(50% - .5rem)",
                  }}
                  type="text"
                  placeholder="Name"
                />
                <input
                  style={{
                    background: "#E7E5EA",
                    border: "0",
                    borderRadius: "1rem",
                    padding: "0 0 0 2rem",
                    height: "4rem",
                    width: "calc(50% - .5rem)",
                  }}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  style={{
                    background: "#E7E5EA",
                    border: "0",
                    borderRadius: "1rem",
                    padding: "0 0 0 2rem",
                    height: "15rem",
                    width: "100%",
                    marginBottom: "1rem",
                  }}
                  type="text"
                  placeholder="Message"
                />
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
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "2.5rem 0 0 0",
            }}
          >
            <div
              style={{
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
                flexDirection: "column",
                width: "33.3rem",
                height: "15rem",
                borderRadius: "2rem",
              }}
            >
              <img width="55rem" src="/images/email-icon.svg" alt="" />
              <h2>Email</h2>
              <p style={{ fontSize: "1.2rem" }}>
                Our friendly team is here to help.
              </p>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".25rem",
                  color: "#52006A",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
                href="mailto:info@wateen.io"
              >
                <span>info@wateen.io</span>
                <img src="/images/redirect-icon.svg" alt="" />
              </a>
            </div>
            <div
              style={{
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
                flexDirection: "column",
                width: "33.3rem",
                height: "15rem",
                borderRadius: "2rem",
              }}
            >
              <img width="55rem" src="/images/location-icon.svg" alt="" />
              <h2>Office</h2>
              <p style={{ fontSize: "1.2rem" }}>
                Come say hello at our office HQ.
              </p>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".25rem",
                  color: "#52006A",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
                href=""
              >
                <span>Almasiaf, Riyadh 12465, Saudi Arabia</span>
                <img src="/images/redirect-icon.svg" alt="" />
              </a>
            </div>
            <div
              style={{
                border: "1px solid gray",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: ".5rem",
                flexDirection: "column",
                width: "33.3rem",
                height: "15rem",
                borderRadius: "2rem",
              }}
            >
              <img width="55rem" src="/images/email-icon.svg" alt="" />
              <h2>Phone</h2>
              <p style={{ fontSize: "1.2rem" }}>
                Sun to Thu from 8 am to 5 pm.
              </p>
              <a
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: ".25rem",
                  color: "#52006A",
                  fontWeight: "700",
                  fontSize: "1rem",
                }}
                href="tel:+966-55-225-3324"
              >
                <span>+966-55-225-3324</span>
                <img src="/images/redirect-icon.svg" alt="" />
              </a>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default LetsTalk;
