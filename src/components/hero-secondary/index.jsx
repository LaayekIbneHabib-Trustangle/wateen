import React from "react";
import { Section, Hero, StyledList, StyledListItem } from "./style";
import { Wrapper } from "..";

const HeroSecondary = (props) => {
  function breakString(inputString, delimiter, maxParts = 99) {
    const parts = inputString.split(delimiter).slice(1, maxParts);

    // If no delimiter is found or only one part is obtained, return the original string
    if (parts.length === 0) {
      return [inputString];
    }

    console.log(parts[2]);
    return parts;
  }

  // Example usage
  const inputString = props.location.pathname;
  const delimiter = "/";
  const result = Object.entries(breakString(inputString, delimiter));
  let newArray = ["0", "Home"];
  const data = [newArray, ...result];

  return (
    <>
      <Section>
        <Wrapper>
          <Hero>
            <div>
              <StyledList>
                {data.map((item) => (
                  <StyledListItem key={item} className="styled-list-item">
                    {item?.[1]}
                  </StyledListItem>
                ))}
              </StyledList>
              <h2>{props.h2}</h2>
              <h3>{props.h3}</h3>
            </div>
          </Hero>
        </Wrapper>
      </Section>
    </>
  );
};

export default HeroSecondary;
