import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/home/Home';
import PostManagement from './pages/postManagement/PostManagement';
import PostEdit from './pages/postEdit/PostEdit';
import PostDetails from './pages/postDetails/PostDetails';



function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:postId" component={PostDetails} />
        <Route exact path="/admin" component={PostManagement} />
        <Route path="/admin/post/:postId" component={PostEdit} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
