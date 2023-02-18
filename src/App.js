import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetails";

import { fetchCountriesData } from "./pages/Home";
import { fetchCountry } from "./components/CountryDetail";

// Layouts
import Rootlayout from "./layouts/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} loader={fetchCountriesData} />
      <Route
        path=":country_name"
        element={<CountryDetail />}
        loader={fetchCountry}
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
