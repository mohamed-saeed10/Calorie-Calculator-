import Calories from './Calories';
import React from 'react'
import { Routes, Route } from 'react-router-dom';



const Pages = () => {
    return (
        <Routes>
            <Route path="/Calories" element={<Calories />} exact></Route>
        </Routes>
  )
}

export default Pages;