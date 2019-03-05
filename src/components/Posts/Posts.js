import React, { Component } from 'react'

class Posts extends Component {

  componentDidMount = () => {
    if (typeof this.props.getPosts === 'function' ){
      this.props.getPosts();
    }
  }

  render() {
    const posts = this.props.posts || [];
    const postItems = posts.map((post) => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))

    return (
      <div>
        <h1>Posts</h1>
        <div>{postItems}</div>
      </div>
    )
  }
}

export default Posts;
