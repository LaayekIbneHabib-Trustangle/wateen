import styled from "styled-components";

export const Section = styled.section`
  &:last-of-type {
    margin-bottom: 55rem;
  }

  @media (max-width: 1080px) {
    &:last-of-type {
      margin-bottom: 35rem;
    }
  }
`;
