import styled from 'styled-components';

interface ContainerProps {
  hasImage: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 55.2rem;
  /* height: auto; */
  height: 17.7rem;

  background: ${({ theme }) => theme.colors.white400};

  border-radius: 0.8rem;

  border-width: 0.2rem;

  border-style: ${({ hasImage }) => (hasImage ? '' : 'dashed')};
  border-color: ${({ theme }) => theme.colors.white290};

  @media (max-width: 500px) {
    height: auto;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px 0;
  }
`;

export const ContentEmpty = styled.div`
  @media (max-width: 500px) {
    padding: 64px 0;
  }
`;

export const ImagePreview = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  overflow: hidden;

  img {
    width: 11.3rem;
    height: 11.3rem;
    object-fit: fill;
  }
`;
