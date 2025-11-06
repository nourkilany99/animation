import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

const RoutingApp = () => {
    const url = window.location.href.split("/");
    console.log(url);
    return ( 

        <BrowserRouter>

        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
        
        
        </BrowserRouter>

     );
}
 
export default RoutingApp;