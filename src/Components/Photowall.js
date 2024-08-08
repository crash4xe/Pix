import React, { Component } from "react";
import Photo from "./Photo";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

class Photowall extends Component {
  render() {
    return (
      <>
        <Link className="add-icon" to={"/addPhoto"}></Link>
        <div className="photo-grid">
          {this.props.posts
            .sort((a, b) => b.id - a.id)
            .map((post, index) => (
              <Photo key={post.id} post={post} {...this.props} index={index} />
            ))}
        </div>
      </>
    );
  }
}

Photowall.propTypes = {
  posts: propTypes.array.isRequired,
};

export default Photowall;
