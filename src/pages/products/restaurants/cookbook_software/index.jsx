import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  RequestADemo,
  Benefits,
  AlternateCards,
} from "../../../../components";
// import { section } from "./style";

const CookbookSoftware = () => {
  const images = [
    "/images/intuitive-cookbook-management.svg",
    "/images/seamless-recipe-search.svg",
    "/images/taste-and-tell.svg",
    "/images/convenient-recipe-printing-and-exporting.svg",
    "/images/integration-with-external-services.svg",
    "/images/creating-and-organizing-collections.svg",
    "/images/recipe-sharing.svg",
    "/images/personalized-recipe-customization.svg",
    "/images/easy-recipe-access.svg",
    "/images/meal-planning-and-nutrition-tracking-tools.svg",
  ];

  const captions = [
    "Intuitive Cookbook Management",
    "Seamless Recipe Search",
    "Taste and Tell",
    "Convenient Recipe Printing and Exporting",
    "Integration with External Services",
    "Creating and Organizing Collections",
    "Recipe Sharing",
    "Personalized Recipe Customization",
    "Easy Recipe Access",
    "Meal Planning and Nutrition Tracking Tools",
  ];

  const forAlternateCards = {
    wateenSoftwareSoftware: {
      caption: "will help you!",
      heading: "Wateen Cookbook Software",
      details:
        "Wateen Cookbook software is an invaluable tool for anyone who loves to cook. It offers an easy way to store, organize, and share recipes. It also allows users to create custom meal plans and grocery lists. With cookbook software, home cooks can quickly search for recipes, find ingredients, and plan out a meal. The software also allows users to save their recipes for later use and share them with friends and family. Cookbook software is a great way to streamline the cooking process and make cooking easier and more enjoyable.",
      image: "/images/wateen-cookbook-software.svg",
    },

    clearVisibility: {
      heading: "Improved Accuracy",
      details:
        "Wateen Cookbook software eliminates the need to copy and paste recipes from multiple sources, resulting in recipes that are more accurate and up to date.",
      image: "/images/improved-accuracy.svg",
    },

    increasedEfficiency: {
      heading: "Increased Efficiency",
      details:
        "Wateen Cookbook software helps reduce the amount of time users spend searching for and organizing their recipes, saving them time and energy.",
      image: "/images/increased-efficiency.svg",
    },

    customizationOptions: {
      heading: "Customization Options",
      details:
        "Wateen Cookbook software provides users with the ability to customize their recipes to their own tastes, such as adding ingredients, adjusting cooking times, and changing serving sizes.",
      image: "/images/customization-options.svg",
    },
  };

  const location = ["Home", "Products", "Restaurants", "Cookbook Software"];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Cookbook Software"
          h3="Cook like a Pro with Wateen Cookbook Software!"
        />
      </section>
      <section
        style={{
          margin: "5rem 0 0rem 0",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1.5rem",
            color: "#FF7600",
          }}
        >
          Wateen Cookbook Software
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#52006A",
          }}
        >
          Offers Some Significant Benefits
        </h1>
        <div
          style={{
            margin: "0rem 0 0rem 0",
            display: "flex",
            gap: "0rem",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              width: images.length > 5 ? "120rem" : "90rem",
              marginTop: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            <Benefits images={images} captions={captions} />
          </div>
        </div>
      </section>
      <section
        style={{
          marginTop: "5rem",
        }}
      >
        <Wrapper>
          <AlternateCards forAlternateCards={forAlternateCards} />
        </Wrapper>
      </section>
      <section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <Brands />
          </div>
        </Wrapper>
      </section>
      <section style={{ marginBottom: "50rem" }}>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <RequestADemo />
          </div>
        </Wrapper>
      </section>
    </>
  );
};

export default CookbookSoftware;
