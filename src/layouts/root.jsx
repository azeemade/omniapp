import { Outlet } from "react-router-dom";
import { useEffect, useState, createContext } from "react";
import Alert from "../components/Alert";
import  Footer  from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Root() {
  const notif = JSON.parse(localStorage.getItem('notification'));
  const [notification, setNotification] = useState(false)
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
        <Navbar />
        <Sidebar />
        <div className="md:px-8 md:ml-[88px]">
          {notification && <Alert message="You have a notification"/>}
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}