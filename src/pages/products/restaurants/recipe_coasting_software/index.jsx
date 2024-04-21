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

const RecipeCoastingSoftware = () => {
  const images = [
    "/images/intuitive-interface-for-customization.webp",
    "/images/flexible-ingredient-adjustment.webp",
    "/images/recipe-sharing-capabilities.webp",
    "/images/nutritional-information-display.webp",
    "/images/versatile-ingredient-option.webp",
    "/images/recipe-recommendations.webp",
    "/images/convenient-recipe-storage.webp",
    "/images/advanced-recipe-search.webp",
  ];

  const captions = [
    "Intuitive Interface for Customization",
    "Flexible Ingredient Adjustment",
    "Recipe Sharing Capabilities",
    "Nutritional Information Display",
    "Versatile Ingredient Options",
    "Recipe Recommendations",
    "Convenient Recipe Storage",
    "Advanced Recipe Search",
  ];

  const forAlternateCards = {
    wateenSoftwareSoftware: {
      caption: "will help you!",
      heading: "Wateen Recipe Coasting Software",
      details:
        "Wateen Recipe costing software can help restaurants and other food-related businesses to increase their profits. This software allows businesses to easily calculate their cost of goods sold (COGS) so they know exactly how much they’re spending on ingredients. It also allows them to analyze the profitability of each recipe, which helps them determine which recipes are more cost-effective and which ones are more profitable. With this in-depth knowledge, businesses can make better decisions about their menu items, pricing, and portions. Additionally, recipe costing software can help businesses keep track of their inventory, so they don’t end up running out of ingredients in the middle of a busy shift. All in all, recipe costing software can be a great asset for any food-related business.",
      image: "/images/wateen-recipe-coasting-software.webp",
    },

    clearVisibility: {
      heading: "Streamlined Menu Planning",
      details:
        "Wateen Recipe costing software allows you to easily create and manage a menu to help you plan meals more efficiently. It also allows you to quickly adjust prices to account for ingredient costs and market conditions.",
      image: "/images/streamlined-menu-planning.webp",
    },

    increasedEfficiency: {
      heading: "Improved Inventory Management",
      details:
        "With recipe costing software, you can easily track your inventory levels and adjust prices accordingly. This can help reduce waste and increase profits.",
      image: "/images/improved-inventory-management.webp",
    },

    customizationOptions: {
      heading: "Enhanced Food Costing",
      details:
        "Wateen Recipe costing software can provide detailed food cost information, including ingredient costs and the cost of preparation. This information can help you make more informed decisions about how to price your menu items and adjust your menu accordingly.",
      image: "/images/enhanced-food-costing.webp",
    },
  };

  const location = [
    "Home",
    "Products",
    "Restaurants",
    "Recipe Coasting Software",
  ];

  return (
    <>
      <section>
        <HeroSecondary
          location={location}
          h2="Recipe Coasting Software"
          h3="Discover the Magic of Recipe Costing Software!"
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
          Wateen Recipe Coasting Software
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

export default RecipeCoastingSoftware;
