import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import App from './components/app/App';
import Login from './components/login';
import Questions from './components/questions'



  const RoutesApp = () =>{
    return (
      <Router>
        <Routes>
            <Route  path="/" element={<App />}  />
            <Route  path="login" element={<Login />}  />
            <Route  path="questions" element={<Questions />}  />
        </Routes>
     </Router>
    )
  }

  export default RoutesApp