import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserProvider';

const Inicio = () => {

  const {user, sigIn,sigOut} = useContext(UserContext)  

  return <div>
  <h1>Inicio</h1>
  <h2>{user ? "Conectado" : "Desconectado"}</h2>
  {user ? (
      <>
          <button className="btn btn-danger" onClick={sigOut}>
              Cerrar sesión
          </button>
          <Link to='RutaProtegida' className='btn btn-warning'>Ruta Protegida</Link>
      </>
  ) : (
      <button className="btn btn-primary" onClick={sigIn}>
          Iniciar sesión
      </button>
  )}
</div>
};

export default Inicio;
