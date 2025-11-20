import { Navigate } from "react-router-dom";

export function ProtectedRouted({children}) {
    const adminSession = JSON.parse(sessionStorage.getItem("adminLogin")) || {};

    if (adminSession.isLogin) {
        return children;
    } else {
        return <Navigate to="/admin" replace/>
    }
}