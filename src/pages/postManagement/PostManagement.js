import React, { Component } from 'react'
import axios from 'axios';
import AdminLayout from '../../layouts/admin/AdminLayout';

class PostManagement extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get("http://localhost:8080/posts/list").then(
      (response) => {
        this.setState({ posts: response.data }
        );
      }
    );
  }

  render() {

    const postRowComponents = this.state.posts.map(
      (post, index) => {
        return (<tr>
                  <td scope="row">{post.id}</td>
                  <td>{post.title}</td>
                  <td>
                    <a className="btn btn-sm btn-info">Editar</a>
                    <a className="btn  btn-sm btn-danger">Excluir</a>
                  </td>                
               </tr>);
      }
    );


    return (
      <AdminLayout>
        <div className="post-admin-container">
          <h2>Posts</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {postRowComponents}
            </tbody>
          </table>
        </div>
        </AdminLayout>
    );
  }
}
export default PostManagement;
