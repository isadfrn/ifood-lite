import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem 2rem;
`;

export const Head = styled.div`
  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export const Slider = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 4fr 0.2fr;
`;

export const CardArea = styled.div`
  height: 35rem;
  display: flex;
  align-items: center;

  gap: 2rem;

  overflow-x: hidden;
  scroll-behavior: smooth;
`;

export const ButtonWrapperLeft = styled.div`
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

export const ButtonWrapperRight = styled.div`
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
