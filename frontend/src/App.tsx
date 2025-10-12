import { createContext, useState } from "react";
import { Welcome } from "./pages/Welcome";
import { List } from "./pages/List";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Add from "./pages/Add";

const PageContext = createContext<{
  sendApiRequestAndHandleError: (
    method: string,
    path: string,
    body?: unknown
  ) => Promise<unknown>;
  error: string | null;
}>({
  sendApiRequestAndHandleError: async () => {
    throw new Error("sendApiRequestAndHandleError error");
  },
  error: null,
});

export { App, PageContext };

function App() {
  const [error, setError] = useState<string | null>(null);

  const host = import.meta.env.VITE_API_URL || "http://unknown-api-url.com";

  const sendApiRequestAndHandleError = async (
    method: string = "GET",
    path: string,
    body?: unknown
  ) => {
    try {
      const response = await fetch(`${host}/${path}`, {
        method: method,
        headers: body ? { "Content-Type": "application/json" } : {},
        body: body ? JSON.stringify(body) : null,
      });

      if (!response.ok) {
        throw new Error(`HTTP Error status: ${response.status}`);
      }

      return await response.json();
    } catch (err) {
      console.error("API request failed:", err);
      setError(err instanceof Error ? err.message : "An error occured");
    }
  };

  const context = {
    sendApiRequestAndHandleError,
    error,
  };

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Welcome />,
        },
        {
          path: "list",
          element: <List />,
        },
        {
          path: "add",
          element: <Add />,
        },
      ],
    },
  ]);

  return (
    <PageContext.Provider value={context}>
      <RouterProvider router={router} />
    </PageContext.Provider>
  );
}
