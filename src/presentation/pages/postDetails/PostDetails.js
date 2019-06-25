import React, { Component } from 'react'
import axios from 'axios'
import Comment from '../../components/comment/Comment'
import SiteLayout from '../../layouts/site/SiteLayout';
import { GetSitePostsDetails } from '../../../domain/interactors/site/GetSitePostsDetails';
import { SitePostsRepository } from '../../../data/repository/SitePostsRepository';
import { PostSiteComment } from '../../../domain/interactors/site/PostSiteComment';

class PostDetails extends Component {
  
    state = {
        fullPost: {}
    }

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);               
        const sitePostRepository =  new SitePostsRepository();

        this.getPostDetails =  new GetSitePostsDetails(sitePostRepository);
        this.postComment = new PostSiteComment(sitePostRepository);
    }

    componentDidMount() {
        this.refreshPost();
    }

    refreshPost() {
       this.getPostDetails.execute(this.props.match.params.postId).then(
            (response) => {
                this.setState(
                    { fullPost: response.data }
                );
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        this.postComment
            .execute(this.props.match.params.postId, data.get('commentAuthor'), data.get('commentBody'))
            .then(
                (response) => {
                    this.refreshPost();
                }
            );
    }

    render(props) {
        let postComponent;

        let commentsComponent;


        if (!Object.keys(this.state.fullPost).length == 0) {


            if (!Object.keys(this.state.fullPost.comment).length == 0) {
                commentsComponent = this.state.fullPost.comment.map(
                    (comment, index) => {
                        return <Comment
                            author={comment.author}
                            content={comment.content}
                            id={comment.id} />
                    }
                );
            }
            else {
                commentsComponent = (
                    <div>
                        <p>Seja o primeiro a comentar.</p>
                    </div>
                );
            }


            postComponent = (
                <SiteLayout>
                    <div className="row d-block">

                        <div className="post-body col-md-12">

                            <h3>{this.state.fullPost.title}</h3>

                            <p>{this.state.fullPost.content}</p>

                        </div>

                        <div className="col-md-5 col-md-offset-7 comments-form-container">
                            <form onSubmit={this.handleSubmit} >
                                <div className="form-group">
                                    <label htmlFor="commentAuthor">Name</label>
                                    <input name="commentAuthor" type="text" className="form-control" id="commentAuthor" placeholder="Digite seu nome" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="commentBody">Comentário</label>
                                    <textarea name="commentBody" type="text" className="form-control" id="commentBody" placeholder="Envie seu comentário"></textarea>
                                </div>

                                <button className="btn btn-primary">Send</button>

                            </form>
                        </div>


                        <h4 className="comments-title">Comentários</h4>

                        <div className="col-md-6">
                            {commentsComponent}
                        </div>
                    </div>
                </SiteLayout>
            );
        }
        else {
            postComponent = (
                <div className="row d-block">
                    <p>Post não encontrado</p>
                </div>
            );
        }

        return postComponent
    }
}

export default PostDetails;