import { Box, Typography } from "@mui/material";
import React from "react";
import pfp2 from "../assets/MihiranPic2.jpg";

const Hero: React.FC = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "64px 32px",
                minHeight: "100vh",
                position: "relative",
                zIndex: 1,
                textAlign: "center",
            }}
        >
            <Typography variant="h4" component="h4" gutterBottom>
                Hello, I am
            </Typography>
            <Box
                component="img"
                sx={{
                    maxWidth: 400,
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    borderRadius: "25px",
                    padding: "10px",
                }}
                alt="profile pic of Mihiran"
                src={pfp2}
            />
            <Typography variant="h4" component="h4" gutterBottom>
                Mihiran Pandey
            </Typography>
            <Typography
                variant="body1"
                maxWidth="600px"
                sx={{ paddingTop: "10px" }}
            >
                I am an innovative Software Engineer with hands-on experience in
                developing AI-powered applications and web solutions. Skilled in
                full-stack development and I have experience programming in C++,
                Python, and JavaScript frameworks, with a strong foundation in
                large language model integration and distributed computing via
                Cloud Platforms like AWS.
            </Typography>
        </Box>
    );
};

export default Hero;
