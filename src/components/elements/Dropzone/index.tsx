import * as S from './styles';
import { BsImage } from 'react-icons/bs';
import { DropzoneInputProps } from 'react-dropzone';

type IDropZone = {
  getInputProps: <T extends DropzoneInputProps>(props?: T) => T;
  isDragActive: boolean;
};

export const Dropzone = ({ getInputProps, isDragActive }: IDropZone) => {
  return (
    <div role="input-drop">
      <input
        data-testid="input-content"
        accept="image/*"
        {...getInputProps()}
        multiple={false}
      />
      <S.DropText>
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p>
              <BsImage /> Organization Logo
            </p>
            <p>Drop the image here or click to browse.</p>
          </>
        )}
      </S.DropText>
    </div>
  );
};
