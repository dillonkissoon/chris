import React from 'react';
import { CssBaseline } from '@mui/material';
import { Theme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

// themes available to the app
import themes from './available.themes';

interface AppThemeProps {
  children: React.ReactNode,
  theme?: Theme
}

const ThemeProvider = ({ 
  children, 
  theme = themes.default
}: AppThemeProps): JSX.Element => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)

export default ThemeProvider;