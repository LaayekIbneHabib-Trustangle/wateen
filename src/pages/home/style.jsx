import styled from "styled-components";

export const Section = styled.section`
  &:first-of-type {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/images/hero.webp);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    height: 50rem;
  }

  &:nth-of-type(3) {
    background: rgba(128, 128, 128, 0.1);
    margin: 4rem 0 4rem 0;
    padding: 2rem 0 2rem 0;
  }

  &:last-of-type {
    margin-bottom: 55rem;
  }

  @media (max-width: 1080px) {
    &:last-of-type {
      margin-bottom: 35rem;
    }
  }
`;

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Primary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  .wifi-ani {
    position: relative;
    top: 3.4rem;
    left: 27.25rem !important;
    width: 7.2rem;
    margin: -6rem 0 0 0;
    transform: rotate(30deg);
  }

  @media (-webkit-min-device-pixel-ratio: 0) {
    .wifi-ani {
      left: 28.24rem !important;
    }
  }

  @-moz-document url-prefix() {
    .wifi-ani {
      left: 28.3rem !important;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 5.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 6.8rem;
  }

  h1 span {
    color: #ff7600;
  }

  h2 {
    color: #ffffff;
    font-size: 4.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 5.85rem;
  }

  div {
    display: flex;
    gap: 2rem;
    margin-top: 5rem;
  }

  @media (max-width: 1080px) {
    align-items: center;
    width: 40rem;

    .wifi-ani {
      display: none;
    }

    h1 {
      font-size: calc(5.5rem / 1.35);
      text-align: center;
    }

    h2 {
      font-size: calc(4.2rem / 1.5);
      text-align: center;
      line-height: calc(5.85rem / 1.45);
    }

    div {
      flex-direction: column;
      margin-top: calc(5rem / 1.65);
    }
  }
`;

export const Seconary = styled.div`
  display: flex;
  // width: "61rem",
  // height: "30rem",

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1080px) {
    display: none;
  }
`;

export const Scroll = styled.div`
  display: flex;
  align-self: end;
  position: relative;
  top: 33px;
  right: 20px;

  img {
    width: 7.5rem;
    height: 9rem;
  }
  @media (max-width: 1080px) {
    display: none;
  }
`;
