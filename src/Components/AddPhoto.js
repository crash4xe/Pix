import React, { Component } from "react";

import withRouter from "./withRouter";

class AddPhoto extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const link = e.target.link.value;
    const description = e.target.description.value;
    const post = {
      id: Number(new Date()),
      description: description,
      imageLink: link,
    };
    if (link && description) {
      this.props.startAddingPost(post);
      this.props.navigate("/Pix");
    }
  }

  render() {
    return (
      <>
        <div className="form-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="link" name="link" />
            <input type="text" placeholder="description" name="description" />
            <button> Post </button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(AddPhoto);
