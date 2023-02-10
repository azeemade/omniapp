import React, { useState, useEffect } from "react";
const Calculator = () => {
    const [nums, setNums] = useState({
        num1: "", num2: "", operator: ""
    });
    const [error, setError] = useState("");

    const handleOperation = async => {
        if(nums.num1 || nums.num2 === "") {
            setError('Input cannot be empty')
        }
        else {

        }
    }

    useEffect( () => {

    }, [])
    return (
        <>
            <div className="">
                <div className="flex flex-col space-y-4 sm:w-full justify-end">
                    <div className="">
                        <label htmlFor="num1" className="block mb-2 text-sm font-medium text-gray-900">Num 1</label>
                        <input type="number" id="num1" name="num1" value={nums.num1} onChange={(e) => setNums({...nums, num1: e.target.value})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <span className="text-xs text-red-500">{error}</span>
                    </div>
                    <div className="">
                        <select name="op" id="op" value={nums.operator} onChange={(e) => setNums({...nums, operator: e.target.value})}>
                            <option value="addition">addition</option>
                            <option value="multiplication">multiplication</option>
                            <option value="subtraction">subtraction</option>
                        </select>
                    </div>
                    <div className="">
                        <label htmlFor="num2" className="block mb-2 text-sm font-medium text-gray-900">Num 2</label>
                        <input type="number" id="num2" name="num2" value={nums.num2} onChange={(e) => setNums({...nums, num2: e.target.value})}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        <span className="text-xs text-red-500">{error}</span>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button type="submit" onClick={() => handleOperation()} 
                        className="bg-indigo-600 hover:bg-blue-800 text-white text-sm font-medium py-2 px-4 rounded-lg">
                        Caculate
                    </button>
                </div>
            </div>
        </>
    );
}
export default Calculator;