import { useState } from 'react';

import * as S from './styles';
import { BsXLg } from 'react-icons/bs';
import { IImage, useImage } from '../../../context/image';

type IEditImage = {
  onRemove: () => void;
  onSave: () => void;
};

export function EditImage({ onRemove, onSave }: IEditImage) {
  const { image, setImage } = useImage();

  const [scale, setScale] = useState(1);

  function handleChangeScale(e: React.ChangeEvent<HTMLInputElement>) {
    setScale(Number(e.target.value));
  }

  function handleSaveImage() {
    setImage({
      ...image,
      scale,
    } as IImage);
    onSave();
  }

  return (
    <S.ImageContent role="edit-content">
      <BsXLg role="x-icon" size={20} onClick={onRemove} />

      <S.ImagePreview>
        <img
          role="img-edit"
          src={image?.src}
          alt=""
          style={{ transform: `scale(${scale})` }}
        />
      </S.ImagePreview>

      <S.ImageEdit>
        <S.ImageEditTitle>Crop</S.ImageEditTitle>

        <S.Input
          role="slider"
          max={10}
          min={0.01}
          step={0.01}
          defaultValue={scale}
          onChange={handleChangeScale}
          type="range"
          width={(scale / 10) * 100}
        />

        <S.Button role="save-button" onClick={handleSaveImage} type="button">
          Save
        </S.Button>
      </S.ImageEdit>
    </S.ImageContent>
  );
}

export default EditImage;
