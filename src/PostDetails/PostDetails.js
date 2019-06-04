import React, { Component } from 'react'
import axios from 'axios'
import Comment from '../Comment/Comment'

class PostDetails extends Component {
    state = {
        fullPost: {}        
    }

    componentDidMount() {
        axios.get("http://localhost:8080/posts/" + this.props.match.params.postId).then(
            (response) => {
                this.setState(
                    { fullPost: response.data }
                );
            }
        );

    }

    render(props) {
        let postComponent;

        let commentsComponent;


        if (!Object.keys(this.state.fullPost).length == 0) {


            if (!Object.keys(this.state.fullPost.comment).length == 0) {
                commentsComponent= this.state.fullPost.comment.map(
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
                <div className="row d-block">

                    <div className="post-body col-md-12">

                        <h3>{this.state.fullPost.title}</h3>

                        <p>{this.state.fullPost.content}</p>

                    </div>

                    <div className="col-md-5 col-md-offset-7 comments-form-container">
                        <form>
                            <div className="form-group">
                                <label htmlFor="commentAuthor">Name</label>
                                <input type="text" className="form-control" id="commentAuthor" placeholder="Digite seu nome" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="commentBody">Comentário</label>
                                <textarea type="text" className="form-control" id="commentBody" placeholder="Envie seu comentário"></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>


                    <h4 className="comments-title">Comentários</h4>

                    <div className="col-md-6">
                        {commentsComponent}
                    </div>
                      
                </div>
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