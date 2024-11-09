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
      300: "#52a6d7",
      500: "#0094e1",
    },
    accent: {
      500: "#FFAE00",
    },
    gray: {
      300: "#D8DDE2",
      500: "#95a3b2",
      600: "#8091a2",
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
          bg: "secondary.300",
          color: "white",
          _hover: {
            bg: "secondary.500",
          },
        },
        outline: {
          bg: "transparent",
          color: "secondary.300",
          border: "1px solid",
          borderColor: "secondary.300",
          _hover: {
            bg: "secondary.500",
            color: "white",
          },
          _active: {
            bg: "secondary.500",
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
    base: "15px",
    md: "30px",
  },
};

export const inGrid = {
  direction: { base: "column", md: "row" },
  gap: "20px",
  width: "100%",
  maxW: "1200px",
  mx: "auto",
  justify: "space-between",
};

export const title48Bold = {
  fontSize: { base: "28px", md: "48px" },
  fontWeight: "bold",
  color: "primary.500",
};

export const title24Regular = {
  fontSize: { base: "20px", md: "24px" },
  fontWeight: "regular",
  color: "primary.500",
};
