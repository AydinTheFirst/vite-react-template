import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";
import { SWRConfig } from "swr";

import { Providers } from "@/provider";
import http from "@/http";

const Layout = () => {
  return (
    <>
      <Providers>
        <SWRConfig
          value={{
            fetcher: http.fetcher,
            onError: http.handleError,
          }}
        >
          <Outlet />
        </SWRConfig>
        <Toaster richColors />
      </Providers>
    </>
  );
};

export default Layout;
