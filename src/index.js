import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Router, Routes, Route} from "react-router";
import ContactList from './components/ContactList';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    {/* <Router>
        <Route path="/contactlist" element={ContactList} />
        <Route path="/" element={App} />
    </Router> */}
  </React.StrictMode>,
  
  document.getElementById('root') 
);


 
