// importing the required chakra libraries
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  // Whatever you pass here will be ADDED to the theme.
  textStyles: { 
    primary: {
      fontFamily: `'Texturina Variable', sans-serif`,
    },
    secondary: {
      fontFamily: `'Inter Variable', sans-serif`,
      fontWeight: 500,
    },
  },
});

// export our theme
export default theme