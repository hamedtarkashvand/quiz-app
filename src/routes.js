import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Login from './Pages/login';
import Questions from './Pages/questions'
import EndGame from './Pages/endGame'



  const RoutesApp = () =>{
    return (
      <Router>
        <Routes>
            <Route  path="/" element={<Login />}  />
            <Route  path="questions" element={<Questions />}  />
            <Route  path="endGame" element={<EndGame />}  />
        </Routes>
     </Router>
    )
  }

  export default RoutesApp