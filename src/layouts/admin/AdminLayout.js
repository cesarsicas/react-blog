import React, { Component } from 'react'
import PostManagement from '../../pages/postManagement/PostManagement';
import { BrowserRouter as Router, Route } from "react-router-dom";

function AdminLayout() {
    return (
        <div>
            <div className="container">
                <div className="jumbotron">

                    <h1 className="display-4">Welcome, Admin !</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quae labore aspernatur nam perspiciatis
                    reiciendis. Consequatur sequi sit dolore iusto nesciunt. Porro facere maiores quos aut autem ipsa nisi veniam.</p>
                </div>


                <Router>
                    <Route exact path="/" component={PostManagement} />
                </Router>
            </div>
        </div>
    );

}

export default AdminLayout;