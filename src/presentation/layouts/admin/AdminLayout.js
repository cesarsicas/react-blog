import React, { Component } from 'react'
import PostManagement from '../../pages/postManagement/PostManagement';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './AdminLayout.css'
import PostEdit from '../../pages/postEdit/PostEdit';


const AdminLayout = ({ children, ...rest }) => {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Admin</a>
            </nav>
            <div className="container layout-general-container">
                {children}
            </div>
        </div>
    )
}

export default AdminLayout;