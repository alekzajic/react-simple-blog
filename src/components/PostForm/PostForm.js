import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      body: '',
    }
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title</label><br />
            <input name="title" type="text" value={this.state.title} onChange={this.onChange} />
          </div>
          <div>
            <label>Body</label><br />
            <textarea name="body" type="text" value={this.state.body} onChange={this.onChange} /> 
          </div>
          <br />
          <button type="submit">Save</button>
          <br />
        </form>
      </div>
    )
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmit = (event) => {
    event.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.addPost({post})
  }
}

export default PostForm;
