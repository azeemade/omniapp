import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const pathname = useLocation().pathname
    useEffect(() => {
        setNotification(JSON.parse(localStorage.getItem('notification')));
    }, []);
    
    const [notification, setNotification] = useState(false)
    return (
        <div className="fixed top-0 bottom-0 border-0 md:border-r border-gray-300 mt-10">
            <div className="md:flex hidden space-y-6 flex-col px-2 mt-4">
                <div>
                    <Link to={`/notifications`} className={`flex flex-col items-center ${ pathname === '/notifications' ? "text-indigo-600" : "text-gray-400" }`}>
                        <div className="inline-flex relative w-fit">
                            <div className={`absolute hidden top-0 right-0 bottom-auto left-auto translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 
                            skew-y-0 scale-x-100 scale-y-100 p-1.5 text-xs bg-red-600 rounded-full z-10 ${notification && '!inline-block'}`}></div>
                            <i className="bi bi-bell"></i>
                        </div>
                        <span className="text-xs">Notifications</span>
                    </Link>
                </div>
                <div>
                    <Link to={`/photo`} className={`flex flex-col items-center ${ pathname === '/photo' ? "text-indigo-600" : "text-gray-400" }`}>
                        <i className="bi bi-image"></i>
                        <span className="text-xs">Photo</span>
                    </Link>
                </div>
                <div>
                    <Link to={`/text`} className={`flex flex-col items-center ${ pathname === '/text' ? "text-indigo-600" : "text-gray-400" }`}>
                        <i className="bi bi-chat-dots"></i>
                        <span className="text-xs">Text</span>
                    </Link>
                </div>
                <div>
                    <Link to={`/calculator`} className={`flex flex-col items-center ${ pathname === '/calculator' ? "text-indigo-600" : "text-gray-400" }`}>
                        <i className="bi bi-calculator"></i>
                        <span className="text-xs">Calculator</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;