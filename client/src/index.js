import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <App />
      </CookiesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
