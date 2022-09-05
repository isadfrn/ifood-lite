import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  display: flex;
  justify-content: space-between;

  > img {
    width: 8rem;
  }
`;

export const CloseOpenButton = styled.button`
  text-align: left;
  background: none;
  border: none;
  margin-bottom: 1rem;
`;

export const MenuBody = styled.div`
  background-color: ${({ theme }) => theme.COLORS.RED_600};
  padding: 2rem;
  height: 100vh;

  display: flex;
  gap: 1rem;
  flex-direction: column;

  position: absolute;
  top: 0;
  left: 0;

  animation-name: slide;
  animation-duration: 600ms;
  transition: all 600ms ease-in;

  button:last-child {
    text-align: left;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE_500};
  }

  @keyframes slide {
    0% {
      left: -40rem;
    }
    100% {
      left: 0rem;
    }
  }
`;
