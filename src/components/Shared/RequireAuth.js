import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from "../../firebase.init"
import Spinier from './Spinier';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    
    if(loading) {
        return <Spinier />
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }
    return children;
};

export default RequireAuth;