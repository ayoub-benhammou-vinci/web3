import { createContext, useState } from "react";
import "./App.css";
import { Welcome } from "./pages/Welcome";
import { Add } from "./pages/Add";
import { List } from "./pages/List";

function App() {
  const pages: { [key: string]: React.FunctionComponent } = {
    Welcome: Welcome,
    List: List,
    Add: Add,
  };
  const [currentPage, setCurrentPage] = useState<string>("Welcome");
  const CurrentPageComponent = pages[currentPage];

  function handlePageChange(page: string) {
    window.history.pushState(null, page, `/${page.toLowerCase()}`);
    setCurrentPage(page);
  }
  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage: handlePageChange }}>
      <CurrentPageComponent />
    </PageContext.Provider>
  );
}

const PageContext = createContext<{
  currentPage: string;
  setCurrentPage: (page: string) => void;
}>({
  currentPage: "Welcome",
  setCurrentPage: () => {},
});

export { App, PageContext };
