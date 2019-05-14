import React, { Component } from 'react'
import axios from 'axios'
import placeholder from '../Assets/avatar_placeholder.png'

class PostDetails extends Component {
    state = {
        fullPost: {},
        comments: []
    }


    componentDidMount() {
        axios.get("http://localhost:8080/blog-java/api/v1/posts/find/" + this.props.match.params.postId).then(
            (response) => {
                this.setState(
                    { fullPost: response.data }
                );
            }
        );

        axios.get("http://localhost:8080/blog-java/api/v1/comments/post/" + this.props.match.params.postId).then(
            (response) => {
                this.setState(
                    { comments: response.data }
                );
            }
        );


    }

    render(props) {
        let postComponent;

        let commentsComponent;


        if (!Object.keys(this.state.comments).length == 0) {
            commentsComponent = (
                <div className="col-md-6 col-md-offset-6 commentspropsntainer" >

                    <div className="row">
                        <div className="col-md-4">

                            <img src={placeholder} alt="" width="100px" className="img-responsive" />

                        </div>

                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe, velit magnam itaque facere
                              ratione officiis a exercitationem perferendis? Quidem, labore nihil vel unde nesciunt illum voluptatem.
                                Quia, veniam eius!</p>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-md-4">

                            <img src={placeholder} alt="" width="100px" className="img-responsive" />

                        </div>

                        <div className="col-md-8">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur saepe,
                                velit magnam itaque facere
                              ratione officiis a exercitationem perferendis? Quidem, labore nihil vel unde nesciunt illum voluptatem.
                              Quia, veniam eius!</p>
                        </div>
                    </div>

                </div>
            );
        }
        else {
            commentsComponent = (
                <div>
                    <p>Seja o primeiro a comentar.</p>
                </div>
            );
        }


        if (!Object.keys(this.state.fullPost).length == 0) {
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

                    {commentsComponent}


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