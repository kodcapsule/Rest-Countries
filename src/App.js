import { createContext, useState } from "react";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetails";

import Error from "./pages/Error";
import CountryError from "./pages/CountryError";

import { fetchCountriesData } from "./pages/Home";
import { fetchCountry } from "./components/CountryDetail";

// Layouts
import Rootlayout from "./layouts/Rootlayout";

export const ThemeContext = createContext(null);
// Routing  of  website
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />} errorElement={<Error />}>
      <Route index element={<Home />} loader={fetchCountriesData} />
      <Route
        path=":country_name"
        element={<CountryDetail />}
        loader={fetchCountry}
        errorElement={<CountryError />}
      />
    </Route>
  )
);

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggle = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, themeToggle }}>
      <div id={theme}>
        <RouterProvider router={router} />;
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
