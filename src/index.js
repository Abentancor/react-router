import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Blog from'./Routes/Blog';
import Posts from './Routes/Posts';
import Contacto from './Routes/Contacto'
import Inicio from './Routes/Inicio';
import NoEncontrada from './Routes/NoEncontrada';
import UserProvider from './Context/UserProvider';
import RutaProtegida from './Routes/RutaProtegida';
import VerificarUsuario from './Componentes/VerificarUsuario'



ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path='/' element={<App />}>
           <Route index element={<Inicio/>}/>
            <Route path='Blog' element={<Blog/>}/>
            <Route path='Blog/:id' element={<Posts/>}/>
            <Route path='Contacto' element={<Contacto/>}/>
            <Route path='RutaProtegida' element={
              <VerificarUsuario>
                  <RutaProtegida/> 
              </VerificarUsuario>}
            />
            <Route path='*' element={<NoEncontrada/>}/>
        </Route>
      </Routes>
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

