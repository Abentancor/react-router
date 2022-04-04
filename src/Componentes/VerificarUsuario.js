import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/UserProvider';

const VerificarUsuario = ({children}) => {

    const {user} = useContext(UserContext)

    if (!user) {
        return <Navigate to='/'/>
    }


  return children
};

export default VerificarUsuario;
