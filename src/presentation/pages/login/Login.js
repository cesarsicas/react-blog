import React, { Component } from 'react'
import SiteLayout from '../../layouts/site/SiteLayout';
import { login } from '../../../config/auth';
import { PostLogin } from '../../../domain/interactors/site/PostLogin';
import { LoginRepository } from '../../../data/repository/LoginRepository';

class Login extends React.Component {

  state = {
    posts: []
  }

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    const sitePostRepository = new LoginRepository();
    this.postLogin = new PostLogin(sitePostRepository)
  }

  componentDidMount() {

  }

  handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    this.postLogin.execute(data.get('email'), data.get('password')).then(
      (response) => {         
        login(response.data);
        this.props.history.push('/admin')
      },
      (error)=>{
        alert("Login inválido");
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
