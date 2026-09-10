import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  cssVariables: true,
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: "#1c1917",
          contrastText: "#fafaf9",
        },
        secondary: {
          main: "#c2410c",
          light: "#fb923c",
          dark: "#9a3412",
        },
        background: {
          default: "#f6f1ea",
          paper: "#fffdf8",
        },
        text: {
          primary: "#1c1917",
          secondary: "#57534e",
        },
        divider: "rgba(28, 25, 23, 0.08)",
      },
    },
    dark: {
      palette: {
        primary: {
          main: "#fafaf9",
          contrastText: "#1c1917",
        },
        secondary: {
          main: "#fb923c",
          light: "#fdba74",
          dark: "#c2410c",
        },
        background: {
          default: "#12100e",
          paper: "#1c1917",
        },
        text: {
          primary: "#f5f5f4",
          secondary: "#a8a29e",
        },
        divider: "rgba(250, 250, 249, 0.12)",
      },
    },
  },
  typography: {
    fontFamily: '"Outfit", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 650,
      letterSpacing: "-0.03em",
      lineHeight: 1.1,
    },
    h2: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1.15,
    },
    h3: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },
    h4: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Fraunces", Georgia, serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            "radial-gradient(1200px 500px at 10% -10%, rgba(194, 65, 12, 0.08), transparent 50%)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 18,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid",
          borderColor: "var(--mui-palette-divider)",
          boxShadow: "0 10px 30px rgba(28, 25, 23, 0.06)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
        },
      },
    },
  },
});
