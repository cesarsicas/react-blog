import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/admin/AdminLayout';
import PostForm from '../../components/postForm/PostForm';
import { GetAdminPostsDetails } from '../../../domain/interactors/admin/GetAdminPostsDetails';
import { AdminPostsRepository } from '../../../data/repository/AdminPostsRepository';
import { isAuthenticated, getToken } from '../../../config/auth';

class PostEdit extends React.Component {

    state = {
        fullPost: {}
    }

    constructor(){
        super();
        this.getPostDetails =  new GetAdminPostsDetails(new AdminPostsRepository());
      }
    

    componentDidMount() {
        this.refreshPost();
    }

    refreshPost() {
        if(isAuthenticated()){            
            this.getPostDetails.execute(getToken(), this.props.match.params.postId).then(
                (response) => {
                    this.setState(
                        { fullPost: response.data }
                    );
                }
            );
        }
        else{
            this.props.history.push('/')
        }


    }

    onSubmitFunction = (event) => {
        event.preventDefault();
        alert("ToDo Save Post");
    }

    render() {
        let formComponent;


        if (!Object.keys(this.state.fullPost).length == 0) {
            formComponent = (<PostForm
                postTitle={this.state.fullPost.title}
                postBody={this.state.fullPost.content}
                onSubmitFunction={this.onSubmitFunction} />
            );

        }
        return (
            <AdminLayout>
                {formComponent}

            </AdminLayout>
        );
    }
}
export default PostEdit;
