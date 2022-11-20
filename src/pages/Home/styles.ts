import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  padding: 1rem;
  position: relative;
`;

export const ToggleTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;

  top: 0;

  gap: 10px;

  button {
    padding: 20px;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.invert};

    gap: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
