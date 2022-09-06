import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const InputWrapper = styled.div``;
