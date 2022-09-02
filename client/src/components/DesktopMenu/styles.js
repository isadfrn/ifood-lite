import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BLUE_600};
  padding: 1rem 2rem;

  display: grid;
  grid-template-columns: 1fr 1fr 4fr 1fr 1fr;
  gap: 1rem;
  align-self: center;

  div {
    margin: auto 0;
    display: flex;
  }

  a {
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }
`;

export const Logo = styled.img`
  margin-top: 0.5rem;
  width: 6rem;
`;

export const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
