import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;

  border: 0.1rem solid ${({ theme }) => theme.COLORS.WHITE_500};
  border-radius: 0.2rem;

  display: flex;

  > input {
    height: 2.5rem;
    width: 100%;
    padding: 1rem 0.5rem;
    border: none;
    font-size: 1rem;

    background-color: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE_500};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.WHITE_500};
    }

    &:focus {
      outline: none;
    }
  }

  > img {
    margin-left: 0.5rem;
  }
`;
