import React from "react";

const Benefits = ({ images, captions }) => {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            // width: "17.5rem",
            // height: "10rem",
            width: "27rem",
            height: "13rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            borderRadius: "1.5rem",
            backgroundColor:
              index % 2 === 0
                ? "rgba(82, 0, 106, 0.05)"
                : "rgba(255, 119, 1, 0.05)",
          }}
        >
          <img width="100rem" height="60rem" src={image} alt="" />
          <p
            style={{ fontSize: "1.5rem", fontWeight: "600", color: "#52006A" }}
          >
            {captions[index]}
          </p>
        </div>
      ))}
    </>
  );
};

export default Benefits;
