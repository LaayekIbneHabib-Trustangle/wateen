import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  Brands,
  Benefits,
  AlternateCards,
} from "../../../../components";
import RequestADemo from "../../../../components/request-a-demo";

// import { section } from "./style";

const CookbookSoftware = () => {
  const images = [
    "/images/intuitive-cookbook-management.webp",
    "/images/seamless-recipe-search.webp",
    "/images/taste-and-tell.webp",
    "/images/convenient-recipe-printing-and-exporting.webp",
    "/images/integration-with-external-services.webp",
    "/images/creating-and-organizing-collections.webp",
    "/images/recipe-sharing.webp",
    "/images/personalized-recipe-customization.webp",
    "/images/easy-recipe-access.webp",
    "/images/meal-planning-and-nutrition-tracking-tools.webp",
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
      image: "/images/wateen-cookbook-software.webp",
    },

    clearVisibility: {
      heading: "Improved Accuracy",
      details:
        "Wateen Cookbook software eliminates the need to copy and paste recipes from multiple sources, resulting in recipes that are more accurate and up to date.",
      image: "/images/improved-accuracy.webp",
    },

    increasedEfficiency: {
      heading: "Increased Efficiency",
      details:
        "Wateen Cookbook software helps reduce the amount of time users spend searching for and organizing their recipes, saving them time and energy.",
      image: "/images/increased-efficiency.webp",
    },

    customizationOptions: {
      heading: "Customization Options",
      details:
        "Wateen Cookbook software provides users with the ability to customize their recipes to their own tastes, such as adding ingredients, adjusting cooking times, and changing serving sizes.",
      image: "/images/customization-options.webp",
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
            fontWeight: "700",
          }}
        >
          Wateen Cookbook Software
        </p>
        <h1
          style={{
            fontSize: "3rem",
            color: "#52006A",
            fontWeight: "800",
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
