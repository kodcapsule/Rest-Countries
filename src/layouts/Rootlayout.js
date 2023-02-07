import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Outlet />
    </>
  );
};

export default Rootlayout;
