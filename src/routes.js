import React from 'react';
import App from './components/app/App';
import Login from './components/login/Login';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

  const RoutesApp = () =>{
    return (
      <Router>
        <Routes>
            <Route exact  path="/" element={<App />}  />
            <Route  path="login" element={<Login />}  />
        </Routes>
     </Router>
    )
  }

  export default RoutesApp