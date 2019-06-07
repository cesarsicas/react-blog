import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import AdminLayout from '../../layouts/admin/AdminLayout';
import PostForm from '../../components/postForm/PostForm';

class PostEdit extends React.Component {

    state = {
        fullPost: {}
    }


    componentDidMount() {
        this.refreshPost();
    }

    refreshPost() {
        axios.get("http://localhost:8080/posts/" + this.props.match.params.postId).then(
            (response) => {
                this.setState(
                    { fullPost: response.data }
                );
            }
        );

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
