import { Component } from "react";
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import { Link, Route, Routes } from "react-router-dom";
import Post from "./Post";

class Main extends Component {
  state = { loading: true };
  componentDidMount() {
    this.props.startLoadingPosts().then(() => {
      this.setState({ loading: false });
    });
    this.props.startLoadingComments();
  }

  render() {
    return (
      <>
        <h1>
          <Link to="/Pix">Pix</Link>
        </h1>
        <Routes>
          <Route
            path="/Pix"
            element={
              <>
                <Photowall {...this.props} />
              </>
            }
          />
          <Route path="/addPhoto" element={<AddPhoto {...this.props} />} />
          <Route
            path="/post/:id"
            element={<Post loading={this.state.loading} {...this.props} />}
          />
        </Routes>
      </>
    );
  }
}

export default Main;
