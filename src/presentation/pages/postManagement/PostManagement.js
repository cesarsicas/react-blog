import React from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/admin/AdminLayout';
import { GetAdminPosts } from '../../../domain/interactors/admin/GetAdminPosts';
import { AdminPostsRepository } from '../../../data/repository/AdminPostsRepository';
import { isAuthenticated, getToken } from '../../../config/auth';

class PostManagement extends React.Component {

  state = {
    posts: []
  }
  constructor(){
    super();
    this.getPosts =  new GetAdminPosts(new AdminPostsRepository());
  }


  componentDidMount() {
    if(isAuthenticated()){
      const token = getToken();

      this.getPosts.execute(token).then(
        (response) => {
          this.setState({ posts: response.data }
          );
        }
      );

    }
    else{
      this.props.history.push('/')
    }

  }

  render() {

    const postRowComponents = this.state.posts.map(
      (post, index) => {
        return (<tr>
          <td scope="row">{post.id}</td>
          <td>{post.title}</td>
          <td>
            <Link to={"/admin/post/" + post.id} className="btn btn-sm btn-info">Editar</Link>
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
