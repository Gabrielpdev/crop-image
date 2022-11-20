import styled from 'styled-components';

export const ImageContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 30px;

  padding: 3.2rem;

  width: 100%;
  position: relative;

  svg {
    position: absolute;
    top: 32px;
    right: 25px;

    color: ${({ theme }) => theme.colors.gray300};
  }

  @media (max-width: 500px) {
    flex-direction: column;

    align-items: center;
    justify-content: center;
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

export const ImageEditTitle = styled.div`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;

  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.gray300};
`;

export const ImageEdit = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  width: 100%;
  max-width: 27.6rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 2.5rem;

  padding: 0.35rem 3.5rem;

  margin: 30px 0 0 auto;

  letter-spacing: -0.02em;

  color: ${({ theme }) => theme.colors.white500};

  background: ${({ theme }) => theme.colors.gray300};
  border-radius: 16px;
  border: none;

  @media (max-width: 500px) {
    margin: 30px auto;
    width: 100%;

    text-align: center;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  margin-top: 20px;

  & {
    -webkit-appearance: none;
    margin-right: 15px;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.blue200};
    border-radius: 5px;
    background-image: linear-gradient(
      ${({ theme }) => theme.colors.blue500},
      ${({ theme }) => theme.colors.blue500}
    );
    background-size: ${({ width }) => width}% 100%;
    background-repeat: no-repeat;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.blue500};
    cursor: ew-resize;
    box-shadow: 0 2px 10px ${({ theme }) => theme.colors.blue500};
    transition: background 0.3s ease-in-out;
  }
`;
