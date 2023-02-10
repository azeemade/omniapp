import React, { useState, useEffect } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../firebase_setup/firebase"
const Photo = () => {
    const [photo, setPhoto] = useState("");
    const [photos, setPhotos] = useState([]);
    const [error, setError] = useState("");
    // const [percent, setPercent] = useState(0);

    const handleSend = (e) => {
        e.preventDefault();
        if(!photo) {
            setError('Photo field cannot be empty')
        }
        else {
            const storageRef = ref(storage, `/files/${photo.name}`)
            const uploadTask = uploadBytesResumable(storageRef, photo);

            uploadTask.on("state_changed", (snapshot) => {
                // const percent = Math.round(
                //     (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                // );
                
                // update progress
                // setPercent(percent);
                },
                (err) => console.log(err),
                () => {
                    // download url
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        setPhotos([...photos, url])
                        console.log(url);
                    });
                }
            ); 

            setPhoto("")
        } 
    }

    useEffect( () => {

    }, [])
    return (
        <div className="md:flex gap-8">
            <div className="mb-8 md:flex">
                <div className="mb-6">
                    <label htmlFor="photo" className="block mb-2 text-sm font-medium text-gray-900">Photo</label>
                    <input type="file" id="photo" name="photo" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    <span className="text-xs text-red-500">{error}</span>
                </div>
                <div className="flex justify-center">
                    <button type="submit" onClick={(e) => handleSend(e)} 
                        className="bg-indigo-600 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg">
                        Send
                    </button>
                </div>
            </div>
            <div>
                <p className="text-lg text-indigo-600 text-center mt-8 border-0 border-b border-gray-200">Gallery</p>
                <div className="columns-2 gap-4 mt-3">
                    {
                        photos.map((data, index) => 
                            <div key={index} className="p-2 border-gray-200">
                                <img src={data} alt={`gallery pic ${index}`} className="w-full rounded" />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}
export default Photo;