import { connect } from "react-redux";
import Main from "./Main";
import { bindActionCreators } from "redux";
import * as actions from "../redux/action";

function mapStateToProps(state) {
  return {
    posts: state.postReducer,
    comments: state.commentReducer,
  };
}

function mapDispacthToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

let App = connect(mapStateToProps, mapDispacthToProps)(Main);

export default App;
