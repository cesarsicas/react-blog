import React from 'react'
import { Link } from "react-router-dom";
function Post(props) {

    return (
        <div className="row d-block blog-item">
            <div className="content" >
                <h3>
                    <Link to={'details/'+props.id} >{props.title}</Link>

                </h3>
            </div>

        </div>
    );
}

export default Post;