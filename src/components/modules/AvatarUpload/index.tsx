import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import * as S from './styles';
import EditImage from '../../elements/EditImage';
import { useImage } from '../../../context/image';
import { Dropzone } from '../../elements/Dropzone';
import DropError from '../../elements/DropError';

export function AvatarUpload() {
  const { image, setImage } = useImage();

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (!file.type.includes('image/')) {
      setError(true);
    }

    const reader = new FileReader();

    reader.onload = function (e) {
      setImage({ src: e?.target?.result as string, scale: 1 });
      setSaved(false);
    };

    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive, fileRejections } =
    useDropzone({ onDrop });

  function handleRemoveImage() {
    setImage(null);
    setSaved(false);
    setError(false);
  }

  function handleSave() {
    setSaved(true);
    setError(false);
  }

  return (
    <S.Container
      {...getRootProps()}
      hasImage={image && !saved}
      role="avatar-upload"
    >
      {image && saved && (
        <S.Content role="saved-content">
          <S.ImagePreview>
            <img
              src={image?.src}
              alt=""
              style={{ transform: `scale(${image.scale})` }}
            />
          </S.ImagePreview>
          <S.Content>
            <Dropzone
              getInputProps={getInputProps}
              isDragActive={isDragActive}
            />
          </S.Content>
        </S.Content>
      )}

      {!image && !saved && (
        <S.ContentEmpty>
          <Dropzone getInputProps={getInputProps} isDragActive={isDragActive} />
        </S.ContentEmpty>
      )}

      {image && !saved && (
        <>
          {fileRejections.length > 0 || error ? (
            <DropError onRemove={handleRemoveImage} />
          ) : (
            <EditImage onRemove={handleRemoveImage} onSave={handleSave} />
          )}
        </>
      )}
    </S.Container>
  );
}

export default AvatarUpload;
