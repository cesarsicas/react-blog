import React from 'react'
import placeholder from '../Assets/avatar_placeholder.png'

function Comment(props) {

    return (
        <div className="row comment-row">
            <div className="col-md-4">
                <img src={placeholder} alt="" width="100px" className="img-responsive" />
            </div>

            <div className="col-md-8">
                <p><strong>{props.author}</strong></p>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default Comment;