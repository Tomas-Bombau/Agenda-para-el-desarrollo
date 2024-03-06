import { Routes, Route } from "react-router-dom";

//Views
import Home from "./views/Home";
import Nosotros from "./views/Nosotros";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { colors } from "@mui/material";

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
  },
  palette: {
    neutral: {
      main: colors.deepOrange[500]
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </ThemeProvider>
  );
}
export default App;
