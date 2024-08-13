import { useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  function WrappedComponent(props) {
    let params = useParams();
    let navigate = useNavigate();
    return <Component {...props} params={params} navigate={navigate} />;
  }
  return WrappedComponent;
};

export default withRouter;
