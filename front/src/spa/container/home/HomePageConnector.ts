import { connect } from "react-redux";
import PageViewer from "./HomePage";

const mapStateToProps = (state:any) => ({
    rooms: state.home.rooms,
    test: state.home.test,
});

const mapDispatchToProps = {
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PageViewer);