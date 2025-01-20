import 'styled-components';
import { dafaultTheme } from './styles/themes/default';

type ThemeType = typeof dafaultTheme;

declare module 'styled-components'{
    export interface DefaultTheme extends ThemeType{}
}