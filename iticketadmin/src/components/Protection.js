import {Navigate, Outlet } from 'react-router-dom';


function ProtectedRoute() {
    
    let currentUser = localStorage.getItem('token')
    return currentUser ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute;