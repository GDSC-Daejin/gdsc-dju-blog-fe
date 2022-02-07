import { DefaultTheme } from 'styled-components';
import { windowSize } from './windowSize';
import { fontSize } from './fontSize';
import { assetColors } from './assetColors';
import { light } from './lightTheme';
import { dark } from './darkTheme';

export const lightTheme: DefaultTheme = {
  theme: light,
  windowSize: windowSize,
  fontSize: fontSize,
  color: assetColors,
};
export const darkTheme: DefaultTheme = {
  theme: dark,
  windowSize: windowSize,
  fontSize: fontSize,
  color: assetColors,
};
