// theme.tsx
import { createTheme } from '@mui/material';

const theme = createTheme({
    typography: {
        fontFamily: "Verdana",
    },
  palette: {
    primary: {
      main: '#FF6B6B',
      light: '#dd4d51',
      dark: '#8f001a',
    },
    secondary: {
      main: '#00FFFF',
      light: '#00999b',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#e0e0e0',
    },
    background: {
      default: '#0F0F0F',
      paper: '#1f1f1f',
    },
    common: {
        black: '#353535'
    }
  },
  // Add a custom property for additional colorss
  // You can also customize typography, breakpoints, etc. here
});

export default theme;
