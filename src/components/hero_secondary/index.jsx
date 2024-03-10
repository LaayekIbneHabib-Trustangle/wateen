import React from "react";
import { Section, Hero, StyledList, StyledListItem } from "./style";
import { Wrapper } from "..";

const HeroSecondary = (props) => {
  return (
    <>
      <Section>
        <iframe src="/images/animations/index.html" frameborder="0"></iframe>
        <Wrapper>
          <Hero>
            <StyledList>
              {props.location.map((item) => (
                <StyledListItem className="styled-list-item">
                  {item}
                </StyledListItem>
              ))}
            </StyledList>
            <div>
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
