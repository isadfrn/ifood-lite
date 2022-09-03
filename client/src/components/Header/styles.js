import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 20rem;
  }

  div {
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.BLUE_600};
    text-align: center;
    padding: 6rem 2rem;

    h1 {
      font-weight: 400;
      font-size: 2rem;
    }

    h2 {
      font-weight: 300;
      font-size: 1rem;
    }
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    flex-direction: row;
    justify-content: center;
    margin-top: 25rem;

    img {
      max-width: 30rem;
      position: absolute;
      left: 0;
      top: 10rem;
    }

    div {
      z-index: -1;
      position: absolute;
      top: 13rem;

      width: 95%;
      text-align: right;

      h1 {
        font-weight: 400;
        font-size: 2rem;
      }

      h2 {
        font-weight: 300;
        font-size: 1rem;
      }
    }
  }
`;
