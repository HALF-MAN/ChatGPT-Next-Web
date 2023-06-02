import { Analytics } from "@vercel/analytics/react";

import { AppRoutes } from "./routes";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  return (
    <>
      <AppRoutes />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
