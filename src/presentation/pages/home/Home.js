import React, { Component } from 'react'
import Post from '../../components/post/Post'
import SiteLayout from '../../layouts/site/SiteLayout';
import { GetSitePosts } from '../../../domain/interactors/site/GetSitePosts';
import { SitePostsRepository } from '../../../data/repository/SitePostsRepository';


class Home extends React.Component {

  state = {
    posts: []
  }

  constructor(){
      super();
      this.getPosts =  new GetSitePosts(new SitePostsRepository());
  }

  componentDidMount() {
    this.getPosts.execute().then(
      (response) => {
        this.setState({ posts: response.data }
        );
      }
    );
  }

  render() {

    const postsComponents = this.state.posts.map(
      (post, index) => {
        return <Post
          id={post.id}
          title={post.title}
          content={post.content} />
      }
    );

    return (
      <SiteLayout>
        <div>
          <div className="row">
            <div className="col-md-8">
              {postsComponents}
            </div>

            <div className="col-md-3 col-md-offset-1">
              <div className="row d-block center right-columm">
                <div className="content">
                  <h2>Right Column</h2>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit inventore deserunt perferendis deleniti autem! Atque amet quam non reprehenderit, delectus saepe minima aperiam ducimus ipsa ipsum nostrum consequatur nulla provident!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </SiteLayout>
    );
  }
}

export default Home;
