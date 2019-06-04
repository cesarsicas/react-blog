import React, { Component } from 'react'

class CommentForm extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        alert("abraxas");
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="commentAuthor">Name</label>
                    <input type="text" className="form-control" id="commentAuthor" placeholder="Digite seu nome" />
                </div>
                <div className="form-group">
                    <label htmlFor="commentBody">Comentário</label>
                    <textarea type="text" className="form-control" id="commentBody" placeholder="Envie seu comentário"></textarea>
                </div>

                <button className="btn btn-primary">Send</button>

            </form>
        );
    }
}

export default CommentForm;

