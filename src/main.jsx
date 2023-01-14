import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import { MantineProvider } from '@mantine/core';

import '@fontsource/inter/variable.css'
// import './index.css';

export const theme = extendTheme(
  {
    colors: { ...proTheme.colors, brand: proTheme.colors.purple },
  },
  proTheme
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </MantineProvider>
  </React.StrictMode >
);
