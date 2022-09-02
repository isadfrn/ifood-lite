import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftContainer = styled.div`
  > img {
    min-width: 10rem;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    text-align: center;

    > img {
      min-width: 15rem;
    }
  }
`;

export const RightContainer = styled.div`
  width: 100%;

  > h2 {
    font-weight: 500;
    text-align: center;
  }

  > a {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    padding: 0rem 4rem;
  }
`;
