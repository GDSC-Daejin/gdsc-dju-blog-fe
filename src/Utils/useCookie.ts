import { useState } from 'react';
import Cookies, { CookieSetOptions } from 'universal-cookie';

const useCookie = (key: string) => {
  const cookies = new Cookies();

  const [item, setItemValue] = useState(() => {
    if (cookies.get(key)) {
      return cookies.get(key);
    }
    return null;
  });

  const setItem = (value: any, options?: CookieSetOptions) => {
    setItemValue({ ...value });
    cookies.set(key, value, { ...options });
  };

  const removeItem = (RemoveKey: string) => {
    cookies.remove(RemoveKey);
  };

  return [item, setItem, removeItem];
};

export default useCookie;
