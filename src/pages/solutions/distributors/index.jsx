import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  HeroSecondary,
  MediaBlock,
  Brands,
  RequestADemo,
} from "../../../components";
import { Section } from "./style";

const data = [
  { vid: "/videos/laptop-animation.mp4" },
  { h2: "Accounts Receivable" },
  {
    p: "Save hours each week by automating data entry and card processing, while giving customers more convenient ways to pay.",
  },
  {
    ul: [
      ["/images/tick-bullet-list.svg", "Automated data entry"],
      ["/images/tick-bullet-list.svg", "Full control of your accounts"],
      ["/images/tick-bullet-list.svg", "Improve payments"],
    ],
  },
  {
    caption:
      "Streamline Your Business with Wateen: Improve Efficiency and Reduce Costs!",
  },
  { span: "Automation" },
];

const Distributors = () => {
  const location = ["Home", "Solutions", "Distributors"];

  return (
    <>
      <Section>
        <HeroSecondary
          location={location}
          h2="For Distributors"
          h3="Experience Seamless Automation with Us Today!"
        />
      </Section>
      <Section>
        <Wrapper>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "6rem",
            }}
          >
            <MediaBlock
              vid={data?.[0]?.vid}
              h2={data?.[1]?.h2}
              p={data?.[2]?.p}
              ul={data?.[3]?.ul}
              caption={data?.[4]?.caption}
              span={data?.[5]?.span}
              loc="/a-r-manager"
            />
          </div>
        </Wrapper>
      </Section>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
    </>
  );
};

export default Distributors;
