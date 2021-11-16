import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from '../Telas/Inicio';
import Task from '../Telas/tarefas';

const Rout = () =>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path ="/" element={<Home />} />
                <Route path ="/Task" element={<Task />} />
                <Route path ="/Task/:id" element={<Task />} />
            </Routes>
        </BrowserRouter>
   )
}

export default Rout;