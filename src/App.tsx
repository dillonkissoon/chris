import Typography from '@mui/material/Typography/Typography'
import ThemeProvider from './theme/theme.provider'

function App() {
  return (
    <ThemeProvider>
      <Typography variant="h1" >Hello World!</Typography>
    </ThemeProvider>
  )
}

export default App
