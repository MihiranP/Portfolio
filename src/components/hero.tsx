import { Box, Typography } from "@mui/material";
import React from "react";

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                padding: "64px 32px", // Adjust padding as needed
                minHeight: "calc(100vh - 64px)", // Assumes a 64px tall header
                position: "relative",
                zIndex: 1,
            }}
        >
            <Typography variant="h1" component="h1" gutterBottom>
                Who am I
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
                Mihiran Pandey
            </Typography>
            <Typography variant="body1" maxWidth="600px">
                I am an innovative Software Engineer with hands-on experience in
                developing AI-powered applications and web solutions. Skilled in
                full-stack development using C++, Python, and JavaScript
                frameworks, with a strong foundation in large language model
                integration and distributed computing.
            </Typography>
        </Box>
    );
};

export default Hero;
