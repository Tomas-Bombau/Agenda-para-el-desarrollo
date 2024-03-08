import { Routes, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import Noticias from "./views/Noticias";
import Equipo from "./views/Equipo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Donaciones from "./views/Donaciones";
import Voluntariado from "./views/Voluntariado";


const theme = createTheme({
  typography: {
    h1: {
      fontSize: "44px",
    },
    h2: {
      fontSize: "40px",
    },
    h3: {
      fontSize: "36px",
    },
    h4: {
      fontSize: "32px",
    },
    h5: {
      fontSize: "28px",
    },
    h6: {
      fontSize: "24px",
    },
    subtitle1: {
      fontSize: "22px",
    },
    body1: {
      fontSize: "18px",
    },
    headerLogo:{
      fontSize: "25px",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      "Chilanka",
      "cursive",
      "Raleway", "sans-serif"
    ].join(","),
    primary: [
      "Raleway", "sans-serif"
    ].join(","),
  },
  palette: {
    yellow: {
      main: "#FEE78A",
    },
    orange: {
      main: "#ff7961",
    },
    green: {
      main: "#3A7B50",
    },
    red: {
      main: "#E15244",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/nosotros" element={<Equipo />} />
        <Route path="/donaciones" element={<Donaciones />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
