import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import { useGetUserToken } from './api/hooks/useGetUserData';
import ThemeButton from './assets/icons/ThemeButton';
import { useTheme } from './hooks/ThemeHandler';
import Layout from './Layout';
import ErrorFallback from './pages/ErrorFallback';
import { darkTheme, lightTheme } from './styles/theme';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [cookies, setCookies] = useCookies(['token', 'refresh_token', 'user']);
  const { newToken } = useGetUserToken(cookies.refresh_token, cookies.token);
  useEffect(() => {
    newToken && setCookies('token', newToken);
  }, []);
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Layout />
        <ThemeButton toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
