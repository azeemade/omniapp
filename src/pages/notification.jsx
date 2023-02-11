import { collection, addDoc } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import { getData as notification } from '../utils/notification';
import React, { useState, useEffect } from "react";
import Alert from "../components/Alert";

const Notification = () => {
    const handleNotify = (e) => {
        e.preventDefault()
        const ref = collection(firestore, "notification");

        let data = {
            message: true
        }

        try{
            addDoc(ref, data)
        } catch(err) {
            console.log(err)
        }
    }

    const [info, setInfo] = useState(false)
    const [ids, setIds] = useState([])

    useEffect(() => {
        const notificationSnapshot = notification();
        setInfo(notificationSnapshot.databaseInfo === undefined ? false : notificationSnapshot.databaseInfo);
        setIds(notificationSnapshot.dataIds);
    }, [])
    return (
        <>
          {info && <Alert id={ids} message="You have a notification"/>}
            <div className="flex flex-col justify-center items-center h-screen">
                <button type="button" onClick={(e) => handleNotify(e)}
                    className="bg-indigo-600 hover:bg-blue-800  text-white text-sm font-medium py-2 px-6 rounded-lg">
                    Notify
                </button> 
            </div>
        </>
    );
}
export default Notification;