import React, { Component } from 'react'
import SiteLayout from '../../layouts/site/SiteLayout';
import axios from 'axios'
import { login } from '../../../config/auth';

class Login extends React.Component {

  state = {
    posts: []
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // axios.get("http://localhost:8080/posts/list").then(
    //   (response) => {
    //     this.setState({ posts: response.data }
    //     );
    //   }
    // );
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    axios.post("http://localhost:8080/login",
      {
        "username": data.get('email'),
        "password": data.get('password')
      }).then(
        (response) => {
          login(response);          
        }
      );
  }

  render() {
    return (
      <SiteLayout>
        <div>
          <div className="row">
            <div className="col-md-8">
              <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                  <label htmlFor="email">Name</label>
                  <input name="email" type="text" className="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Comentário</label>
                  <input name="password" type="password" className="form-control" id="password" placeholder="Digite sua senha" />
                </div>

                <button className="btn btn-primary">Send</button>

              </form>
            </div>

          </div>
        </div>
      </SiteLayout>
    );
  }
}

export default Login;
