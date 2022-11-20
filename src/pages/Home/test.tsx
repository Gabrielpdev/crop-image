import { screen, waitFor } from '@testing-library/react';
import { Home } from '.';
import { renderTheme } from '../../styles/renderTheme';
import userEvent from '@testing-library/user-event';

describe('<AvatarUpload />', () => {
  it('should render <Home/>', () => {
    renderTheme(<Home />);

    expect(screen.getByRole('home-content')).toBeInTheDocument();
  });

  it('should toggle to dark theme', async () => {
    renderTheme(<Home />);

    const toggleButton = await screen.findByRole('toggle-theme');

    await userEvent.click(toggleButton);

    expect(screen.getByRole('home-content')).toHaveTextContent('Dark');
  });

  it('should toggle to light theme', async () => {
    renderTheme(<Home />);

    const toggleButton = await screen.findByRole('toggle-theme');

    await userEvent.click(toggleButton);

    expect(screen.getByRole('home-content')).toHaveTextContent('Light');
  });
});
