import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import Alert from "../components/Alert";
import  Footer  from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Root() {
  // const notif = JSON.parse(localStorage.getItem('notification'));
  const pathname = useLocation().pathname
  // const [notification, setNotification] = useState(false)
  // const RootContext = createContext()
  // useEffect(() => {
  //     setNotification(notif);
  // }, [notif]);

//   setTimeout(() => {
//     setNotification(notif);
//  }, 2000)

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
        <div className="md:px-8 md:ml-[88px]">
          {notification && <Alert message="You have a notification"/>}
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