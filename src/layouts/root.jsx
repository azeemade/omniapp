import { Outlet } from "react-router-dom";
import  Footer  from "../components/Footer";

// import { Navbar } from "../components/Navbar";

export default function Root() {
  return (
    <div className="px-2 md:px-8 py-4 h-screen">
        {/* <Navbar /> */}
        <Outlet />
        {/* <div className="md:hidden mt-8"> */}
          <Footer  />
        {/* </div> */}
    </div>
  );
}