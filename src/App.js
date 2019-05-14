import React from 'react';
import './App.css';
import Home from './Home/Home'
import { BrowserRouter as Router, Route } from "react-router-dom";
import PostDetails from './PostDetails/PostDetails';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">Dropdown</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="jumbotron">

          <h1 className="display-4">Just a blog</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quae labore aspernatur nam perspiciatis
            reiciendis. Consequatur sequi sit dolore iusto nesciunt. Porro facere maiores quos aut autem ipsa nisi veniam.</p>
        </div>

        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/details/:postId" component={PostDetails} />
        </Router>



      </div>
    </div>
  );
}

export default App;
