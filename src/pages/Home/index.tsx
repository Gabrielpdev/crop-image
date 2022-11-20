import { BsMoon, BsSun } from 'react-icons/bs';
import AvatarUpload from '../../components/modules/AvatarUpload';
import { useTheme } from '../../context/theme';
import * as S from './styles';

export function Home() {
  const { theme, ToggleTheme } = useTheme();

  return (
    <S.Container role="home-content">
      <S.ToggleTheme>
        Toggle Theme:
        <button role="toggle-theme" onClick={ToggleTheme}>
          {theme?.title === 'light' ? (
            <>
              <BsMoon size={20} />
              Dark
            </>
          ) : (
            <>
              <BsSun size={20} />
              Light
            </>
          )}
        </button>
      </S.ToggleTheme>
      <AvatarUpload />
    </S.Container>
  );
}

export default Home;
