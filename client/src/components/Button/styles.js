import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 3rem;
  margin-bottom: 0.8rem;
  border-radius: 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.RED_600};
  color: ${({ theme }) => theme.COLORS.WHITE_500};

  transition: filter 0.2s;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }

  > img {
    margin-right: 0.5rem;
  }
`;
