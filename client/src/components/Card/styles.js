import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};
  max-width: 20rem;

  display: flex;
  flex-direction: column;

  h2 {
    padding: 0.5rem 0;
    text-align: center;
  }

  h3 {
    text-align: center;
    font-weight: 300;
    font-size: 0.8rem;
  }
`;

export const FavoriteWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const Button = styled.button`
  border: none;
  background: none;
`;

export const ProductImage = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin: 1rem 0;
  margin: 0 auto;
`;

export const ControlsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.COLORS.BLUE_500};
  text-align: center;
  padding: 1rem 0;
  font-size: 2rem;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
`;
