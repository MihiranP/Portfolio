import { createTheme } from "@mui/material/styles";

// Dracula color palette
const draculaColors = {
    background: "#282a36",
    currentLine: "#44475a",
    foreground: "#f8f8f2",
    comment: "#6272a4",
    cyan: "#8be9fd",
    green: "#50fa7b",
    orange: "#ffb86c",
    pink: "#ff79c6",
    purple: "#bd93f9",
    red: "#ff5555",
    yellow: "#f1fa8c",
    blue: "#6272a4",
};

const theme = createTheme({
    typography: {
        fontFamily: "Consolas, Monaco",
        h1: {
            fontFamily: "Consolas, Monaco",
            fontSize: "1.25rem",
        },
        h2: {
            fontFamily: "Consolas, Monaco",
            fontSize: "1.1rem",
        },
        body1: {
            fontFamily: "Work Sans Thin,",
        },
    },
    palette: {
        mode: "dark",
        primary: {
            main: draculaColors.purple,
        },
        secondary: {
            main: draculaColors.cyan,
        },
        error: {
            main: draculaColors.red,
        },
        warning: {
            main: draculaColors.orange,
        },
        info: {
            main: draculaColors.blue,
        },
        success: {
            main: draculaColors.green,
        },
        background: {
            default: draculaColors.background,
            paper: draculaColors.currentLine,
        },
        text: {
            primary: draculaColors.foreground,
            secondary: draculaColors.comment,
        },
    },
    components: {},
});

export default theme;
