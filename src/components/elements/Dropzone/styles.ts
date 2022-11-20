import styled from 'styled-components';

export const DropText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    font-size: 1.4rem;

    font-weight: 500;
    line-height: 2.5rem;
  }

  p:first-child {
    color: ${({ theme }) => theme.colors.gray400};
    font-weight: bold;
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.gray300};
  }
`;
