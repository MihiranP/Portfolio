import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import Header from "./components/header";
// Import other components as needed

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            {/* Other components */}
        </ThemeProvider>
    );
}

export default App;
