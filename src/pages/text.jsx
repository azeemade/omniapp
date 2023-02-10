import React, { useState, useEffect } from "react";
import { addDoc, collection, query, onSnapshot } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
// import { addDoc, collection, setDoc, deleteDoc, doc, query, onSnapshot } from "firebase/firestore";

const Text = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const [info, setInfo] = useState([])
    const [ids, setIds] = useState([])

    const handleSend = async => {
        if(text === "") {
            setError('text cannot be empty')
        }
        else {
            const ref = collection(firestore, "chats");

            let data = {
                message: text
            }

            try{
                addDoc(ref, data)
            } catch(err) {
                console.log(err)
            }
        }

        setText("")
    }

    useEffect(() => {
        const getData = async () => {
            const data = await query(collection(firestore, "chats"));
            onSnapshot(data, (querySnapshot) => {
                const databaseInfo = [];
                const dataIds = []
                querySnapshot.forEach((doc) => {
                    databaseInfo.push(doc.data().message);
                    dataIds.push(doc.id)
                });
                
                setIds(dataIds)
                setInfo(databaseInfo)
            });
        }
        
        getData()
    }, [])
    return (
        <div className="md:flex gap-8">
            <div className="mb-8 md:flex">
                <div className="mb-6">
                    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">Text</label>
                    <input type="text" id="text" name="text" value={text} onChange={(e) => setText(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <span className="text-xs text-red-500">{error}</span>
                </div>
                <div className="flex justify-center">
                    <button type="submit" onClick={() => handleSend()} 
                        className="bg-indigo-600 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg">
                        Send
                    </button>
                </div>
            </div>
            <div>
                <span className="text-lg text-indigo-600 text-center mt-8">Received texts</span>
                <div>
                    {
                        info.map((data, index) => 
                            <div key={ids[index]} className="p-2 bg-white border-0 border-b border-gray-200 rounded">
                                <p className="text-sm ">{data}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Text;