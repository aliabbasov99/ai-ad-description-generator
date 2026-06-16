import Container from '@mui/material/Container';
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AdDataForm from "./components/AdDataForm"
import Output from './components/Output';


const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#222222"
    },
    text: {
      primary: "#ffffff"
    },
    primary: {
      main: "#3e4ede"
    }
  }
});

const App = () => {
  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />  
      <Container fixed>
        <h1>AI Reklam Mətn Generatoru</h1>

        <AdDataForm />
        <Output />
        
      </Container>
      
    </ThemeProvider>
    
  )
}

export default App