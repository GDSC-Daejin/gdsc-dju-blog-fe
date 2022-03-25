import 'styled-components';
import { fontSize } from './fontSize';
import { windowSize } from './windowSize';
import { assetColors } from './assetColors';

declare module 'styled-components' {
  export interface DefaultTheme {
    windowSize: typeof windowSize;
    fontSize: typeof fontSize;
    color: typeof assetColors;
  }
}
