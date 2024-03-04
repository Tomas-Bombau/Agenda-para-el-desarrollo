import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      fontSize: "22px"
    },
    body1: {
      fontSize: "18px",
    },
  },
  palette: {
    violet: {
      main: "#f50057",
    },
  },
});



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
