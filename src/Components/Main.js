import { Component } from "react";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Link, Route, Routes } from "react-router-dom";
import Post from "./Post";

class Main extends Component {
  render() {
    return (
      <>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Photowall {...this.props} />
              </>
            }
          />
          <Route path="/addPhoto" element={<AddPhoto {...this.props} />} />
          <Route path="/post/:id" element={<Post {...this.props} />} />
        </Routes>
      </>
    );
  }
}

export default Main;
