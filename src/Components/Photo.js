import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class Photo extends Component {
  render() {
    return (
      <figure className="figure">
        <Link to={`/post/${this.props.post.id}`}>
          <img
            className="photo"
            src={this.props.post.imageLink}
            alt={this.props.post.description}
          />
        </Link>
        <figcaption>
          <p>{this.props.post.description}</p>
        </figcaption>
        <div className="button-container">
          <button
            onClick={() => {
              this.props.removePost(this.props.post.id);
              this.props.navigate && this.props.navigate("/");
            }}
          >
            Remove
          </button>
          <Link to={`/post/${this.props.post.id}`} className="button">
            <div className="comment-count">
              <div className="speech-bubble"></div>
              {this.props.comments[this.props.post.id]
                ? this.props.comments[this.props.post.id].length
                : 0}
            </div>
          </Link>
        </div>
      </figure>
    );
  }
}

Photo.propTypes = {
  post: propTypes.object.isRequired,
};

export default Photo;
