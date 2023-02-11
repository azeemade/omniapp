import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordChecklist from "react-password-checklist"
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"

import { ErrorSpan } from "../components/ErrorSpan"

const Signup = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState({ email: false, password: false});

    const handleEmail = (e) => {
        const pattern = /\S+@\S+\.\S+/

        setEmail(e.target.value)
        pattern.test(e.target.value) ? setError({...error, email:false}) : setError({...error, email:true});
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setError({...error, password: true})
    }

    const handleSignup = async(e) => {
        e.preventDefault();
        if(email === "" || password === ""){
            setDisabled(true)
        }
        else{
            const ref = collection(firestore, "users");

            let data = {
                user: {
                    email: email,
                    password: password
                }
            }
             addDoc(ref, data)
                .then( () =>{
                    setDisabled(false);
                    navigate('/notifications');
                    localStorage.setItem('authenticated', JSON.stringify(true));
                })
                .catch((err) => console.log(err)) 
        }
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="md:w-[440px] px-2 md:px-4 py-8 bg-white rounded">
                    <div>
                        <p className="text-center text-xl font-semibold whitespace-nowrap text-dark mb-3">Omniapp</p>
                        <p className="text-gray-700 mb-6 font-medium">
                            Sign up for an account
                        </p>
                    </div>
                    <form action="" method="post" className="flex-col flex space-y-4">
                        <div>
                            <label htmlFor="email" name="email"
                                className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                            <input type="email" id="email" value={email} onChange={(e) => handleEmail(e)} placeholder="E-mail Address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                    { error.email &&
                                        <ErrorSpan message="Email is invalid" />
                                    }
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e) => handlePassword(e)}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                {
                                    error.password && 
                                    <PasswordChecklist 
                                        className="text-xs mt-2"
                                        rules={["minLength","specialChar","number","capital"]}
                                        minLength={8}
                                        value={password}
                                        onChange={(isValid) => {isValid && setDisabled(false)}}
                                    />
                                }
                            <p className="mt-2 text-sm underline">
                                <Link to={`/`} className="font-medium text-blue-500 hover:text-indigo-500">Forgot password ?</Link>
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <button type="submit" onClick={(e) => handleSignup(e)}  disabled={disabled}
                                className="bg-indigo-600 enabled:hover:bg-blue-800 disabled:opacity-75  text-white text-sm font-medium py-2 px-4 rounded-lg">Sign
                                up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
export default Signup;