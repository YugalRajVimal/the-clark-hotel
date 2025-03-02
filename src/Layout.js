import { Outlet } from "react-router-dom";
import Nav from "./Components/New/Nav";
import Footer from "./Components/New/Footer";

const Layout = () => {
  return (
    <>
      <div className="relative">
        {/* <LandingPageBackground /> */}
        <div className="h-screen relative w-full z-[30]">
          <Nav />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
