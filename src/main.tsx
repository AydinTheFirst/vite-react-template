import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@generouted/react-router";
import { Toaster } from "sonner";

import "@/styles/globals.css";

import { ErrorBoundaryLayout } from "@/components";
import { Providers } from "@/provider";
import { SWRConfig } from "swr";
import http from "./http";

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: routes,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <SWRConfig
        value={{
          fetcher: http.fetcher,
          onError: http.handleError,
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
      <Toaster richColors />
    </Providers>
  </StrictMode>
);
