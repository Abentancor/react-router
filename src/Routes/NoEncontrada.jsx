import React from 'react';
import { Link } from 'react-router-dom';

const NoEncontrada = () => {
  return <div>
            <h1>404</h1>
            <Link to='/' className='btn btn-danger'>Inicio</Link>
         </div>;
};

export default NoEncontrada;
