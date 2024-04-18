import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(/images/hero-secondary.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 40rem;

  iframe {
    position: absolute;
    left: -10rem;
    width: 70rem;
    height: 35rem;
  }
`;

export const Hero = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 2.5rem;
    width: 65rem;
    display: flex;
    flex-direction: column;
    // align-items: center;
    gap: 2rem;

    @media (max-width: 490px) {
      width: 93vw;
    }
  }

  h2 {
    color: #ff7600;
    text-align: center;
    font-size: 2.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  h3 {
    color: #ffffff;
    text-align: center;
    font-size: 2.55rem;
    font-style: normal;
    font-weight: 500;
    line-height: 3rem;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 28px;
  // border: 0.5px solid #ff32d7;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(30px);
  padding: 1rem 2rem 1rem 2rem;
  list-style-type: none;
  // width: 100%;
  // width: 60rem;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const StyledListItem = styled.li`
  color: #ffffff;
  text-align: center;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.14rem;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
`;
