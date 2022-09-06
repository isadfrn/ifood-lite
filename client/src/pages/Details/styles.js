import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export const DetailsContainer = styled.div`
  padding: 0 2rem;
  margin: 0 auto;
`;

export const BackLink = styled.div`
  a {
    display: flex;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE_500};
    padding: 1rem 0;
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    display: grid;
    grid-template-columns: 0.5fr 1fr;
    gap: 2rem;

    img {
      width: 30rem;
      height: 30rem;
      border-radius: 50%;
    }
  }
`;

export const ProductInfo = styled.div`
  padding: 1rem 0;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    text-align: left;
  }
`;

export const IngredientsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  padding: 1rem 0;

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    display: flex;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;

    padding: 1rem 0;
  }
`;

export const Ingredient = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`;
