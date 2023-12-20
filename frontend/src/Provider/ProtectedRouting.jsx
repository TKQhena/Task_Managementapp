import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from './loginContext';
import { useContext } from 'react';

function ProtectedRoute() {
    const { login, setLogin } = useContext(UserContext)
    if (login) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute