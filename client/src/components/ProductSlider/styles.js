import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export const Slider = styled.div`
  height: 35rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardArea = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  button {
    background: none;
    border: none;
  }

  img {
    width: 1.2rem;
  }
`;

export const NoItem = styled.div``;
