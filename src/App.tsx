import React from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import theme from "./theme/theme";
import Header from "./components/header";
import SparklingBackground from "./components/sparkling_background";
import Hero from "./components/hero";
import Experiences from "./components/experiences";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ position: "relative", minHeight: "100vh" }}>
                <SparklingBackground />
                <Header />
                <Box id="Home" sx={{ position: "relative", zIndex: 1 }}>
                    <Hero />
                </Box>
                <Box id="Experiences" sx={{ position: "relative", zIndex: 1 }}>
                    <Experiences />
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default App;
