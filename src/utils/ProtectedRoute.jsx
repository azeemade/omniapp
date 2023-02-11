import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
    const authenticated = JSON.parse(localStorage.getItem('authenticated'));
    return (
        <>
            {
                authenticated ? children : 
                    <Navigate to="/" replace={true} />
            }
        </>
    )
    
    // return ;
};