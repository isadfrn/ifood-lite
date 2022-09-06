import styled from "styled-components";

export const Container = styled.div`
  padding: 4rem 1rem;
`;

export const Head = styled.div`
  h2 {
    font-weight: 500;
    padding-left: 4rem;
    padding-bottom: 1rem;
  }
`;

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 1fr 0.2fr;
`;

export const CardArea = styled.div`
  display: grid;
  gap: 1rem;
  grid-auto-flow: column dense;

  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: none;
    border: none;
  }

  img {
    width: 1.2rem;
  }
`;

export const NoItem = styled.div``;
