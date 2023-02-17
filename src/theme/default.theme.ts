import { PaletteColor, ThemeOptions } from '@mui/material/styles';
import { grey, indigo } from '@mui/material/colors';

const primary: PaletteColor = {
  light: grey[50],
  main: grey[200],
  dark: indigo[900],
  contrastText: '#000',
}

const secondary: PaletteColor = {
  light: '#0077D1',
  main: '#0077D1',
  dark: '#0077D1',
  contrastText: '#fff',
}

const DefaultTheme: ThemeOptions = {
  palette: {
    primary,
    secondary,
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: '"WorkSans-Medium", "Helvetica", "Arial", sans-serif',
    button: {
      textTransform: 'none',
    },
  },
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
};

export default DefaultTheme;