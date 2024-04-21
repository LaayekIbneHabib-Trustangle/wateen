import React from "react";
import {
  Wrapper,
  HeroSecondary,
  MediaBlock,
  Brands,
  RequestADemo,
} from "../../../components";
import { Section } from "./style";

const data1 = [
  // { img: "/images/account-receivable-automation.webp" },
  { vid: "/videos/laptop-animation.mp4" },
  { h2: "Order Manager" },
  { h3: "For Chefs and OPS Managers" },
  {
    p: "Shop with ease, quickly accessing all your suppliers from one app. Consolidate orders, chat with suppliers, and get a clear line-of-sight into all your purchases.",
  },
  {
    ul: [
      ["/images/consolidated-orders.webp", "Consolidated orders"],
      ["/images/real-time-visibility.webp", "Real-time visibility"],
      ["/images/convenient-chat.webp", "Convenient chat"],
      ["/images/ims-integration.webp", "IMS integration"],
    ],
  },
];

const data2 = [
  { img: "/images/invoice-manager.webp" },
  { h2: "Invoice Manager" },
  { h3: "for OPS Managers and Accountants" },
  {
    p: "Say 'goodbye' to paper invoices and manual entry. Enjoy hassle-free, automated digital invoices automatically synced across your systems.",
  },
  {
    ul: [
      ["/images/ocr-scanning.webp", "OCR Scanning"],
      ["/images/gl-code-support.webp", "GL code support"],
      ["/images/approval-workflows.webp", "Approval workflows"],
      [
        "/images/quickbooks-online-integration.webp",
        "QuickBooks Online integration",
      ],
    ],
  },
  { row: "reverse" },
  { btnClr: "#52006A" },
];

const data3 = [
  { img: "/images/dual-phone.webp" },
  { h2: "AP Manager" },
  { h3: "For Operations Managers and Accountants" },
  {
    p: "Easily track and pay for all supplier orders from one screen while keeping your accounting system completely in sync.",
  },
  {
    ul: [
      ["/images/clear-visibility-icon.webp", "Clear visibility"],
      ["/images/easy-payment.webp", "Easy payment"],
      [
        "/images/quickbooks-online-integration-orange.webp",
        "QuickBooks Online integration",
      ],
    ],
  },
];

const Restaurants = () => {
  const location = ["Home", "Solutions", "Restaurants"];

  return (
    <>
      <Section>
        <HeroSecondary
          location={location}
          h2="For Restaurants"
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
              theme="#FF7600"
              vid={data1?.[0]?.vid}
              h2={data1?.[1]?.h2}
              h3={data1?.[2]?.h3}
              p={data1?.[3]?.p}
              ul={data1?.[4]?.ul}
              loc="/order-manager"
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
            <MediaBlock
              theme="#52006A"
              img={data2?.[0]?.img}
              h2={data2?.[1]?.h2}
              h3={data2?.[2]?.h3}
              p={data2?.[3]?.p}
              ul={data2?.[4]?.ul}
              row={data2?.[5]?.row}
              btnClr={data2?.[6]?.btnClr}
              loc="/invoice-manager"
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
            <MediaBlock
              theme="#FF7600"
              img={data3?.[0]?.img}
              h2={data3?.[1]?.h2}
              h3={data3?.[2]?.h3}
              p={data3?.[3]?.p}
              ul={data3?.[4]?.ul}
              loc="/a-p-manager"
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

export default Restaurants;
