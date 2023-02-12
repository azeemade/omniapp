import { notify } from '../utils/notification';
import React, { useState } from "react";
import Alert from "../components/Alert";

const Notification = () => {
    const [info, setInfo] = useState(false)

    const handleNotify = (e) => {
        e.preventDefault()
        notify(true, 'set');
        setInfo(notify(null, 'get'));
    }
    return (
        <>
          {info && <Alert message="You have a notification"/>}
            <div className="flex flex-col justify-center items-center">
                <button type="button" onClick={(e) => handleNotify(e)}
                    className="bg-indigo-600 hover:bg-blue-800  text-white text-sm font-medium py-2 px-6 rounded-lg">
                    Notify
                </button> 
            </div>
        </>
    );
}
export default Notification;