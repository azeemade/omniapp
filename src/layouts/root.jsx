import { Outlet, useLocation } from "react-router-dom";
import  Footer  from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Root() {
  const pathname = useLocation().pathname

  return (
    <div className="bg-gray-50 h-screen text-gray-900 md:w-[480px]">
      <div className="px-2">
        {
          pathname !== "/" &&
            <div>
              <Navbar />
              <Sidebar />
            </div>
        } 
        <div className="md:px-8 md:ml-[88px] sm:mb-[52px]">
          <Outlet />
        </div>
        {
          pathname !== "/" &&
            <Footer />
        } 
      </div>
    </div>
  );
}