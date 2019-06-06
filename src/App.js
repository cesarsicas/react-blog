import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SiteLayout from './layouts/site/SiteLayout';
import AdminLayout from './layouts/admin/AdminLayout';



function App() {
  return (
    <Router>
      <Route exact path="/" component={SiteLayout} />    
      <Route exact path="/admin" component={AdminLayout} />                    
    </Router>
  );
}

export default App;
