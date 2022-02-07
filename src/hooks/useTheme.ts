import { useCallback, useState } from 'react';

export const useTheme = () => {
  // 브라우저 기본 테마
  const isBrowserDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  let initTheme = isBrowserDarkMode ? 'dark' : 'light';
  // 이전 사용기록 세팅
  const localSettingTheme = localStorage.getItem('theme');
  if (localSettingTheme) {
    initTheme = localSettingTheme;
  }
  const [theme, setTheme] = useState(initTheme);

  const setMode = (mode: string) => {
    // 테마정보 변경시 localstorage 에 저장
    setTheme(mode);
    window.localStorage.setItem('theme', mode);
  };

  const toggleTheme = () => setMode(theme === 'light' ? 'dark' : 'light');

  return [theme, toggleTheme];
};
