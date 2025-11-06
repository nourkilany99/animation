import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

const RoutingApp = () => {
    const url = window.location.href.split("/");
    console.log(url);
    return ( 

        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Detail' element={<Detail />} />
        </Routes>
        
        
        </BrowserRouter>

     );
}
 
export default RoutingApp;