import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route } from "react-router-dom";

import Weather from './components/weather';
import TodoWrapper from './components/TodoWrapper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Weather/>} />
        <Route path="/TodoWrapper" element={<TodoWrapper/>} />
      </Routes>
      </BrowserRouter>
      <footer class="footer">
          <h2>Follow Us on</h2>
              <div>
                  <i><FontAwesomeIcon icon={faFacebook} /></i>
                  <i><FontAwesomeIcon icon={faInstagram} /></i>
                  <i><FontAwesomeIcon icon={faTwitter} /></i>
              </div>
              <div class="rights">
                 <h4 class="text-white">
                  Copyright ©️2024 All rights reserved | designed by G.Praphul Chandra
                  </h4>
              </div>
      </footer>
      
  </>
  );
};

export default App;
