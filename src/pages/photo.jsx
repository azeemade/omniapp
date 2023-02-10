import React, { useState, useEffect } from "react";
const Photo = () => {
    const [photo, setPhoto] = useState("");
    const [error, setError] = useState("");

    const handleSend = async => {
        if(photo === "") {
            setError('Photo field cannot be empty')
        }
        else {

        }
    }

    useEffect( () => {

    }, [])
    return (
        <div className="md:flex gap-8">
            <div className="mb-8 md:flex">
                <div className="mb-6">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
                    <input type="file" id="photo" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)}
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
                <span>Gallery</span>
                <div></div>
            </div>
        </div>
    );
}
export default Photo;