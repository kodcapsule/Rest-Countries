import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetails";

// Layouts
import Rootlayout from "./layouts/Rootlayout";
import CountryDetailsLayout from "./layouts/CountryDetailsLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="country" element={<CountryDetailsLayout />}>
        <Route path="name" element={<CountryDetail />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
