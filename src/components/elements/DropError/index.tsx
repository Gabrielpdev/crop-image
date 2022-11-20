import * as S from './styles';
import { BsExclamationCircleFill, BsXLg } from 'react-icons/bs';

type IEditImage = {
  onRemove: () => void;
};

export function DropError({ onRemove }: IEditImage) {
  return (
    <S.ImageContent role="error-content">
      <BsXLg onClick={onRemove} size={20} />
      <S.Content>
        <S.ImagePreview>
          <BsExclamationCircleFill size={20} />
        </S.ImagePreview>
        <S.TextContent>
          <p>Sorry, the upload failed.</p>
          <p onClick={onRemove}>Try again</p>
        </S.TextContent>
      </S.Content>
    </S.ImageContent>
  );
}

export default DropError;
