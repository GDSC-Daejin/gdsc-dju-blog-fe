import 'styled-components';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';
import { assetColors } from './assetColors';
import { light } from './lightTheme';

declare module 'styled-components' {
  export interface DefaultTheme {
    theme: typeof light;
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
    color: typeof assetColors;
  }
}
