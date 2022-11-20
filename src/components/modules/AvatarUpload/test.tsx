import { fireEvent, renderHook, screen } from '@testing-library/react';
import { renderTheme } from '../../../styles/renderTheme';
import { AvatarUpload } from '.';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { ImageContext, useImage } from '../../../context/image';

describe('<AvatarUpload />', () => {
  it('should render <DropZone/> if not have image and not saved', () => {
    renderTheme(<AvatarUpload />);

    expect(screen.getByRole('input-drop')).toBeInTheDocument();
  });

  it('should render <EditImage/> if have image and not saved', async () => {
    renderTheme(<AvatarUpload />);

    const input = screen.getByRole('input-drop').firstChild as HTMLElement;
    const file = [new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })];

    await userEvent.upload(input, file);

    expect(await screen.findByRole('edit-content')).toBeInTheDocument();
  });

  it('should render back to initial state on click on X', async () => {
    renderTheme(<AvatarUpload />);

    const input = screen.getByRole('input-drop').firstChild as HTMLElement;
    const file = [new File(['(⌐□_□)'], 'test.png', { type: 'image/png' })];

    await userEvent.upload(input, file);

    const closeElement = await screen.findByRole('x-icon');

    await userEvent.click(closeElement);

    expect(await screen.findByRole('input-drop')).toBeInTheDocument();
  });

  it('should render error if not be image file', async () => {
    renderTheme(<AvatarUpload />);

    const input = screen.getByRole('input-drop').firstChild as HTMLElement;
    const file = [
      new File(['(⌐□_□)'], 'test.pdf', { type: 'application/pdf' }),
    ];

    await userEvent.upload(input, file);

    expect(await screen.findByRole('error-content')).toBeInTheDocument();
  });

  it('should save on press button', async () => {
    renderTheme(<AvatarUpload />);

    const input = screen.getByRole('input-drop').firstChild as HTMLElement;
    const file = [
      new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
    ];

    await userEvent.upload(input, file);

    const closeElement = await screen.findByRole('save-button');

    await userEvent.click(closeElement);

    expect(await screen.findByRole('saved-content')).toBeInTheDocument();
  });

  it('should change image zoom', async () => {
    renderTheme(<AvatarUpload />);

    const input = screen.getByRole('input-drop').firstChild as HTMLElement;
    const file = [
      new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' }),
    ];

    await userEvent.upload(input, file);

    const slider = await screen.findByRole('slider');

    fireEvent.change(slider, { target: { value: 1.5 } });

    expect(screen.getByRole('img-edit')).toHaveStyle('transform: scale(1.5)');
  });
});
