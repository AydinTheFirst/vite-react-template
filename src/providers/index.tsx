import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import React from "react";
import { useNavigate } from "react-router";
import { Toaster, ToasterProps } from "sonner";
import { SWRConfig } from "swr";

import http from "@/http";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemesProvider>
      <HeroProvider>
        <SWRProvider>{children}</SWRProvider>
        <ToastProvider />
      </HeroProvider>
    </ThemesProvider>
  );
};

const ThemesProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="light">
      {children}
    </NextThemesProvider>
  );
};

const HeroProvider = ({ children }: React.PropsWithChildren) => {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} validationBehavior="native">
      {children}
    </HeroUIProvider>
  );
};

const SWRProvider = ({ children }: React.PropsWithChildren) => {
  return (
    <SWRConfig
      value={{
        fetcher: http.fetcher,
        onError: http.handleError,
      }}
    >
      {children}
    </SWRConfig>
  );
};

const ToastProvider = () => {
  const theme = useTheme();
  return (
    <Toaster richColors theme={theme as unknown as ToasterProps["theme"]} />
  );
};
