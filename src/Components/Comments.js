import React, { Component } from "react";

class Comments extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(e.target.comment.value, this.props.id);
    e.target.comment.value = "";
  }
  render() {
    return (
      <div className="comment">
        {this.props.comments.map((comment, index) => (
          <p key={index}> {comment}</p>
        ))}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment"></input>
          <input type="submit" hidden></input>
        </form>
      </div>
    );
  }
}

export default Comments;
