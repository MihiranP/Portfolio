import React from "react";
import {
    Box,
    Typography,
    IconButton,
    useTheme,
    Link,
    Grid,
    AppBar,
} from "@mui/material";
import { GitHub, LinkedIn, Email } from "@mui/icons-material";

const Contact: React.FC = () => {
    const theme = useTheme();

    const contactInfo = [
        {
            icon: <Email />,
            label: "Email",
            link: "mailto:mihiranpandey360@gmail.com",
            text: "mihiranpandey360@gmail.com",
        },
        {
            icon: <LinkedIn />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/mihiran-pandey",
            text: "linkedin.com/in/mihiran-pandey",
        },
        {
            icon: <GitHub />,
            label: "GitHub",
            link: "https://www.github.com/mihiranp",
            text: "github.com/mihiranp",
        },
    ];

    return (
        <Box component="section" sx={{ py: 4, padding: "32px" }}>
            <Typography
                variant="h4"
                color="primary"
                sx={{
                    mb: 1,
                    textAlign: "center",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: theme.palette.error.main,
                }}
            >
                Contact
            </Typography>
            <Box
                sx={{
                    bgcolor: theme.palette.background.default,
                    maxWidth: "900px",
                    margin: "0 auto",
                    padding: "30px",
                    borderRadius: "25px",
                    position: "relative",
                }}
            >
                <Grid
                    container
                    spacing={3}
                    sx={{
                        maxWidth: "md",
                        margin: "0 auto",
                        justifyContent: "center",
                    }}
                >
                    {contactInfo.map((contact) => (
                        <Grid xs={12} sm={4} key={contact.label}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <IconButton
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.primary.main,
                                        mb: 1,
                                        transition:
                                            "transform 0.2s ease-in-out",
                                        "&:hover": {
                                            transform: "scale(1.1)",
                                            color: theme.palette.secondary.main,
                                        },
                                    }}
                                >
                                    {contact.icon}
                                </IconButton>
                                <Typography
                                    variant="h2"
                                    color="success"
                                    sx={{ mb: 1 }}
                                >
                                    {contact.label}
                                </Typography>
                                <Link
                                    href={contact.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        color: theme.palette.text.primary,
                                        textDecoration: "none",
                                        "&:hover": {
                                            color: theme.palette.secondary.main,
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {contact.text}
                                </Link>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
};

export default Contact;
