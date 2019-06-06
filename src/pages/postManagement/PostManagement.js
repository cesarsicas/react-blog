import React, { Component } from 'react'

class PostManagement extends React.Component {

  state = {
    posts: []
  }

  componentDidMount() {
    // axios.get("http://localhost:8080/posts/list").then(
    //   (response) => {
    //     this.setState({ posts: response.data}
    //     );
    //   }
    // );
  }

  render() {

    return(
        <div>
            <p>Arroz admin</p>
        </div>
    );

    // const postsComponents = this.state.posts.map(
    //   (post, index) => {
    //     return <Post
    //       id={post.id}
    //       title={post.title}
    //       content={post.content} />
    //   }
    // );

    // return (
    //   <div>
    //     <div className="row">
    //       <div className="col-md-8">          
     
    //           {postsComponents}
                                         
    //       </div>

    //       <div className="col-md-3 col-md-offset-1">
    //         <div className="row d-block center right-columm">
    //           <div className="content">
    //             <h2>Right Column</h2>
    //             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit inventore deserunt perferendis deleniti autem! Atque amet quam non reprehenderit, delectus saepe minima aperiam ducimus ipsa ipsum nostrum consequatur nulla provident!</p>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // );
  }
}

export default PostManagement;
