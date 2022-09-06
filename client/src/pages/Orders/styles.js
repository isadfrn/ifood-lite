import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-weight: 500;
    padding-bottom: 1rem;
  }
`;

export const TableContainer = styled.div`
  padding: 2rem;
  overflow-x: auto;
`;

export const Table = styled.table`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-collapse: collapse;
  width: 100%;

  th {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 0.5rem;
  }

  td {
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 0.5rem;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Pending = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.RED_700};
`;

export const Preparing = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
`;

export const Delivered = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_500};
`;
