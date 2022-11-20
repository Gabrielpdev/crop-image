import { fireEvent, renderHook, screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/renderTheme';
import { Dropzone } from '.';
import { useDropzone } from 'react-dropzone';

describe('<Dropzone />', () => {
  it('should change text if isDragActive', () => {
    const { result } = renderHook(() => useDropzone());
    const getInputProps = result.current.getInputProps;

    renderTheme(<Dropzone getInputProps={getInputProps} isDragActive />);

    expect(screen.getByRole('input-drop')).toHaveTextContent(
      'Drop the files here',
    );
  });
});
