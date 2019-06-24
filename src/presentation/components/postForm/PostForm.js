import React, { Component } from 'react'

function PostForm(props) {
    return (
        <form onSubmit={props.onSubmitFunction} >
            <div className="form-group">
                <label htmlFor="postTitle">Título</label>
                <input name="postTitle" type="text" className="form-control" id="postTitle" placeholder="Título do Post"   value={props.postTitle}/>
            </div>
            <div className="form-group">
                <label htmlFor="postBody">Texto</label>
                <textarea name="postBody" type="text" className="form-control" id="postBody" placeholder="Texto do Post">{props.postBody}</textarea>
            </div>

            <button className="btn btn-primary">Send</button>
        </form>
    );
}

export default PostForm;