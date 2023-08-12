import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./configs/Theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
