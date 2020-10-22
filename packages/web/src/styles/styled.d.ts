import * as styledComponents from 'styled-components';
import { ThemedStyledComponentsModule } from 'styled-components';

import { ThemeTypes } from './themes/Types';

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ThemeTypes>;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeTypes {}
}

export {
  css, createGlobalStyle, keyframes, ThemeProvider,
};
export default styled;
