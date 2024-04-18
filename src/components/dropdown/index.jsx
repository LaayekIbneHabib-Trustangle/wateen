import React, { useState } from "react";
import usaFlag from "/images/usa-flag.webp";
import saudiArabiaFlag from "/images/saudi-arabia-flag.webp";
import useCountryStore from "../../store";

const Dropdown = () => {
  // const [selectedCountry, setSelectedCountry] = useState("");
  const selectedCountry = useCountryStore((state) => state.selectedCountry);
  const setSelectedCountry = useCountryStore(
    (state) => state.setSelectedCountry
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={toggleDropdown}
        style={{
          width: "10rem",
          height: "4rem",
          background: "transparent",
          border: "1px solid #B3B3B3",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          padding: "0 0 0 1.5rem",
        }}
      >
        {selectedCountry ? (
          <>
            <img
              src={selectedCountry === "USD" ? usaFlag : saudiArabiaFlag}
              alt={`${selectedCountry} flag`}
              style={{ width: "20px", height: "auto", marginRight: "5px" }}
            />
            {selectedCountry}
            <img
              style={{ position: "absolute", margin: "0 0 0 5.55rem" }}
              src="/images/dropdown-arrow.webp"
              alt=""
            />
          </>
        ) : (
          <>
            <img
              src={saudiArabiaFlag}
              alt="Saudi Arabia flag"
              style={{ width: "20px", height: "auto", marginRight: "5px" }}
            />
            SAR
            <img
              style={{ position: "absolute", margin: "0 0 0 5.55rem" }}
              src="/images/dropdown-arrow.webp"
              alt=""
            />
          </>
        )}
      </button>
      {isOpen && (
        <div
          className="dropdown-menu"
          style={{
            width: "10rem",
            position: "absolute",
            backgroundColor: "white",
          }}
        >
          <button
            onClick={() => selectCountry("USD")}
            style={{
              background: "transparent",
              border: "1px solid #B3B3B3",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              width: "100%",
              height: "4rem",
              padding: "0 0 0 1.5rem",
            }}
          >
            <img
              src={usaFlag}
              alt="USA flag"
              style={{ width: "20px", height: "auto", marginRight: "5px" }}
            />
            USD
          </button>
          <button
            onClick={() => selectCountry("SAR")}
            style={{
              background: "transparent",
              border: "1px solid #B3B3B3",
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              width: "100%",
              height: "4rem",
              padding: "0 0 0 1.5rem",
            }}
          >
            <img
              src={saudiArabiaFlag}
              alt="Saudi Arabia flag"
              style={{ width: "20px", height: "auto", marginRight: "5px" }}
            />
            SAR
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
