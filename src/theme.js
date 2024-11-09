import { extendTheme } from "@chakra-ui/react";

// Default styling
const theme = extendTheme({
  fonts: {
    body: "Neue Haas Unica, sans-serif",
  },
  colors: {
    primary: {
      500: "#002345",
      600: "#001F3D",
    },
    secondary: {
      500: "#52A6D7",
      600: "#3F8FBB",
    },
    accent: {
      500: "#FFAE00",
    },
    background: {
      300: "#f2f4f6",
      500: "#909090",
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "22px",
        fontWeight: "bold",
        width: "100%",
        maxWidth: "330px",
        height: "44px",
        minHeight: "44px",
      },
      variants: {
        solid: {
          bg: "secondary.500",
          color: "white",
          _hover: {
            bg: "primary.500",
          },
        },
        outline: {
          bg: "transparent",
          color: "secondary.500",
          border: "1px solid",
          borderColor: "secondary.500",
          _hover: {
            bg: "secondary.500",
            color: "white",
          },
          _active: {
            bg: "secondary.600",
            color: "white",
          },
        },
      },
      defaultProps: {
        variant: "solid",
      },
    },
  },
});

export default theme;

export const fullWidth = {
  width: "100%",
  justify: "center",
  align: "center",
  px: {
    base: "20px",
    md: "40px",
  },
};

export const inGrid = {
  direction: "column",
  width: "100%",
  maxW: "1200px",
  mx: "auto",
};
