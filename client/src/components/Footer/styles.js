import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 4rem;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }

  @media (min-width: ${({ theme }) => theme.BREAKPOINTS.LAPTOP}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
