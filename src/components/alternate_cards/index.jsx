import React from "react";

const AlternateCards = ({ forAlternateCards }) => {
  return (
    <>
      {Object.values(forAlternateCards).map((item, index) => (
        <>
          <div
            className="container"
            style={{
              display: "flex",
              gap: "5rem",
              alignItems: "center",
              justifyContent: "flex-end",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              marginBottom: "7.5rem",
            }}
          >
            <div>
              <p
                style={{
                  color: "#FF7600",
                  fontSize: "1.4rem",
                  textTransform: "uppercase",
                }}
              >
                {item.caption}
              </p>
              <h2
                style={{
                  color: "#52006A",
                  fontSize: "2.5rem",
                  textTransform: "capitalize",
                }}
              >
                {item.heading}
              </h2>
              <div>
                <p
                  style={{
                    color: "#000",
                    fontSize: "1.5rem",
                    marginTop: "2rem",
                    display:
                      typeof item.details === "string" ? "block" : "none",
                  }}
                >
                  {item.details}
                </p>
                <ul
                  style={{
                    display: Array.isArray(item.details) ? "block" : "none",
                  }}
                >
                  {Object.values(item.details).map((item) => (
                    <li
                      style={{
                        color: "#000",
                        fontSize: "1.5rem",
                        marginTop: "1rem",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img src={item.image} alt="" />
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default AlternateCards;
