import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, StandardButton } from "..";
import useStore from "../../store";

import {
  Menu,
  Item,
  BurgerMenu,
  BurgerItem,
  SubMenu,
  SubItems,
} from "./style.jsx";

const values = {
  solutions: ["Restaurants", "Distributors"],
  products: {
    restaurants: [
      "Invoice Manager",
      "Order Manager",
      "AP Manager",
      "Restaurant Management Software",
      "Inventory Management",
      "Recipe Coasting Software",
    ],
    restaurants_2: [
      "Restaurant Vendor Payments",
      "Purchasing & Order Management",
      "Expenses Tracking",
      "Multi Units & Chains",
      "Cookbook Software",
    ],
    distributors: ["AR Manager"],
  },
  integrations: {
    buyers: ["POS", "Accounting & ERP Systems", "Ecommerce", "Reachware"],
    suppliers: ["Accounting & ERP Systems"],
  },
  resources: ["About us", "Case Studies", "Blog", "News"],
};

const Navbar = () => {
  const { hoveredKey, handleHover, handleLeave } = useStore();

  const handleClick = (itemId) => {
    setYourState((prevState) => {
      const updatedState = { ...prevState };
      updatedState[itemId] = !updatedState[itemId];
      return updatedState;
    });
  };

  //
  function addHyphenAndLowercase(input) {
    // Remove spaces from the input
    const inputWithoutSpaces = input.replace(/\s/g, "");

    // Find the index of the first capital letter
    let firstCapitalIndex = -1;
    for (let i = 0; i < inputWithoutSpaces.length; i++) {
      if (
        inputWithoutSpaces[i].toUpperCase() === inputWithoutSpaces[i] &&
        inputWithoutSpaces[i].toLowerCase() !== inputWithoutSpaces[i]
      ) {
        firstCapitalIndex = i;
        break;
      }
    }

    // If no capital letter is found, return the input in lowercase
    if (firstCapitalIndex === -1) {
      return inputWithoutSpaces.toLowerCase();
    }

    // Add hyphen before each capital letter after the first occurrence
    let result = inputWithoutSpaces
      .split("")
      .map((char, index) =>
        index > firstCapitalIndex && char.toUpperCase() === char
          ? `-${char}`
          : char
      )
      .join("");

    // Convert the entire string to lowercase
    return result.toLowerCase();
  }

  // Example usage:
  // const inputString = "This Is An Example";
  // const modifiedString = addHyphenAndLowercase(inputString);
  // console.log(modifiedString);

  return (
    <>
      <Wrapper>
        <Menu onMouseLeave={handleLeave}>
          <Item>
            <NavLink style={{ color: "#594D6D" }} to="/">
              <img src="/images/logo-dark.svg" alt="" />
            </NavLink>
          </Item>
          <Item>
            <NavLink style={{ color: "#594D6D" }} to="/">
              Home
            </NavLink>
          </Item>
          {Object.entries(values).map(([key, value]) => (
            <Item key={key} onMouseEnter={() => handleHover(key)}>
              <>
                <span>{key}</span>
                <span>
                  <img src="/images/dropdown-arrow.svg" alt="" />
                </span>
                {hoveredKey === key && value && (
                  <SubMenu
                    style={
                      !Array.isArray(value)
                        ? { display: "flex", gap: "5rem" }
                        : {
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                          }
                    }
                  >
                    {Array.isArray(value)
                      ? value.map((item) => (
                          <SubItems key={item}>
                            <NavLink
                              style={{ color: "#594D6D" }}
                              key={item}
                              to={`/solutions/${item}`.toLowerCase()}
                            >
                              {item}
                            </NavLink>
                          </SubItems>
                        ))
                      : Object.entries(value).map(([subKey, subValue]) => (
                          <div key={subKey}>
                            <SubItems style={{ pointerEvents: "none" }}>
                              <h3>
                                {subKey === "restaurants_2" ? "‎" : subKey}
                              </h3>
                            </SubItems>
                            {subValue.map((item) => (
                              <SubItems key={item}>
                                <NavLink
                                  style={{ color: "#594D6D" }}
                                  key={item}
                                  // to={`/products/${item}`}
                                  to={`/products/restaurants/${addHyphenAndLowercase(
                                    item
                                  )}`}
                                >
                                  {item}
                                </NavLink>
                              </SubItems>
                            ))}
                          </div>
                        ))}
                  </SubMenu>
                )}
              </>
            </Item>
          ))}
          <Item>
            <NavLink style={{ color: "#594D6D" }} to="/plans">
              Plans
            </NavLink>
          </Item>
          <Item>
            <NavLink style={{ color: "#594D6D" }} to="/login">
              Login
            </NavLink>
          </Item>
          <Item>
            <NavLink style={{ color: "#594D6D" }} to="/lets-talk">
              <StandardButton
                name="Let's Talk"
                width="12.5rem"
                borderRadius="3rem"
              />
            </NavLink>
          </Item>
        </Menu>

        <BurgerMenu>
          <main>
            <div>
              <NavLink to="/">
                <img src="/images/burger-menu.svg" alt="" />
              </NavLink>
            </div>
            <div>
              <NavLink to="/">
                <img src="/images/logo-dark.svg" alt="" />
              </NavLink>
            </div>
          </main>

          <BurgerItem
          // style={{
          //   height: "calc(100vh - 8rem)",
          //   width: "100%",
          // }}
          ></BurgerItem>
        </BurgerMenu>
      </Wrapper>
    </>
  );
};

export default Navbar;
