import React, { useState, useEffect } from "react";
const Text = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");

    const handleSend = async => {
        if(text === "") {
            setError('text cannot be empty')
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
                <span>Sent texts</span>
                <div></div>
            </div>
        </div>
    );
}
export default Text;