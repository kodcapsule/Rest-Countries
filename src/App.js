import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";

// Layouts
import Rootlayout from "./layouts/Rootlayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="country" element={<CountryDetails />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
