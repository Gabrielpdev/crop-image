import styled from 'styled-components';

export const ImageContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;

  padding: 3.2rem;

  width: 100%;
  position: relative;

  > svg {
    position: absolute;
    top: 32px;
    right: 25px;

    color: ${({ theme }) => theme.colors.gray300};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 50px;
`;

export const TextContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  p:first-child {
    color: ${({ theme }) => theme.colors.red500};

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 180%;

    letter-spacing: -0.02em;
  }

  p:last-child {
    color: ${({ theme }) => theme.colors.gray300};

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 180%;

    cursor: pointer;

    letter-spacing: -0.02em;
    text-decoration-line: underline;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 11.3rem;
  height: 11.3rem;

  background: ${({ theme }) => theme.colors.white300};

  border-radius: 50%;

  overflow: hidden;

  svg {
    color: ${({ theme }) => theme.colors.white500};
  }

  img {
    width: 11.3rem;
    height: 11.3rem;
    object-fit: fill;
  }
`;
