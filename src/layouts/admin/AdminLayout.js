import React, { Component } from 'react'
import PostManagement from '../../pages/postManagement/PostManagement';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './AdminLayout.css'

function AdminLayout() {
    return (
        <div>
            
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Admin</a>
            </nav>

            <div className="container">
                <Router>
                    <Route path="/" component={PostManagement} />
                </Router>
            </div>
        </div>
    );

}

export default AdminLayout;