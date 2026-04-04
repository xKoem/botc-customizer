import { createTheme } from "@mui/material/styles";

const dark = {
    primary: "#AAC7FF",
    onPrimary: "#0A305F",
    secondary: "#BEC6DC",
    background: "#111318",
    surface: "#111318",
    onSurface: "#E2E2E9",
    outline: "#8E9099",
};

export const darkTheme= createTheme({
    palette: {
        mode: "dark",

        primary: {
            main: dark.primary,
            contrastText: dark.onPrimary,
        },

        secondary: {
            main: dark.secondary,
        },

        background: {
            default: dark.background,
            paper: dark.surface,
        },

        text: {
            primary: dark.onSurface,
        },

        divider: dark.outline,
    },
});