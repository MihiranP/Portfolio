import React, { useState, useEffect } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    useMediaQuery,
    useTheme,
    Box,
    Typography,
} from "@mui/material";

const sections = {
    Home: "Home",
    Experiences: "Experiences",
    Projects: "Projects",
    Contact: "Contact",
};

const Header: React.FC = () => {
    const [activeSection, setActiveSection] = useState("Home");
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const headerHeight = 48;

    // on page load we start at top because our handlescroll breaks if refreshed in middle of page (lol)
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const offset = windowHeight / 3;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollPosition + windowHeight >= documentHeight - 100) {
                setActiveSection("Contact");
                return;
            }

            for (const [id, label] of Object.entries(sections)) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (
                        scrollPosition >= offsetTop - offset &&
                        scrollPosition < offsetTop + offsetHeight - offset
                    ) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    const renderNavItems = () =>
        Object.entries(sections).map(([id, label]) => (
            <Button
                key={id}
                color="inherit"
                onClick={() => handleNavClick(id)}
                disableRipple
                sx={{
                    fontFamily: theme.typography.fontFamily,
                    fontSize: theme.typography.h2.fontSize,
                    color:
                        activeSection === id
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                    fontWeight: activeSection === id ? "bold" : "normal",
                    "&:hover": {
                        backgroundColor: theme.palette.background.default,
                    },
                }}
            >
                {activeSection === id ? "[" + label + "]" : label}
            </Button>
        ));

    const NameComponent = () => (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
                variant="h1"
                component="span"
                sx={{ color: theme.palette.success.main }}
            >
                {"<"}
            </Typography>
            <Typography
                component="span"
                variant="h1"
                sx={{ color: theme.palette.text.primary }}
            >
                &nbsp;{"Mihiran's"}&nbsp;
            </Typography>
            <Typography
                variant="h1"
                component="span"
                sx={{ color: theme.palette.text.primary }}
            >
                &nbsp;{"Portfolio"}&nbsp;
            </Typography>
            <Typography
                variant="h1"
                component="span"
                sx={{ color: theme.palette.success.main }}
            >
                {" />"}
            </Typography>
        </Box>
    );

    return (
        <AppBar
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.default,
                borderBottom: "none",
                display: "flex",
            }}
        >
            <Toolbar
                variant="dense"
                sx={{
                    justifyContent: isMobile ? "center" : "space-between",
                    minHeight: 48,
                }}
            >
                <NameComponent />
                {!isMobile && (
                    <Box
                        sx={{
                            position: "absolute",
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        {renderNavItems()}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
