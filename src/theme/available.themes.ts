import {
  createTheme, Theme
} from '@mui/material/styles';

// import all available mui themes 
import DefaultTheme from './default.theme';

// create a MUI theme for each of your mui theme option definitions 
const themes = {
  default: createTheme(DefaultTheme)
}

// This is a trick to get the keys of the themes object as a type
export type ThemeDefintions = {
  readonly [key in keyof typeof themes]: Theme
}

export default themes as ThemeDefintions;