import { DefaultTheme } from 'styled-components';
import { windowSize } from './windowSize';
import { fontSize } from './fontSize';
import { assetColors } from './assetColors';

export const theme: DefaultTheme = {
  windowSize: windowSize,
  fontSize: fontSize,
  color: assetColors,
};
