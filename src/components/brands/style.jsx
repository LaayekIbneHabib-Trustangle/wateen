import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  margin: 0 2rem 0 2rem;

  h2 {
    color: #52006a;
    text-align: center;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }

  @media all and (max-width: 570px) {
    h2 {
      font-size: 1.75rem;
    }
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .logos {
    overflow: hidden;
    padding: 6rem 0;
    white-space: nowrap;
    // background: red;
    width: 100rem;
  }

  .logos-slide {
    display: inline-block;
    animation: 15s slide infinite linear;
  }

  .logos-slide img {
    height: 6rem;
    margin: 0 4rem;
  }
`;
