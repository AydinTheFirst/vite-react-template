import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@generouted/react-router";

import "@/styles/globals.css";

import { ErrorBoundaryLayout } from "@/components";

const router = createBrowserRouter([
  {
    element: <ErrorBoundaryLayout />,
    children: routes,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
