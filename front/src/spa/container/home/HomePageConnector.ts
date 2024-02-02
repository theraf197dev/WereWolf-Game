import { connect } from "react-redux";
import PageViewer from "./HomePage";
import { increment } from "../../core/home/reducer";

const mapStateToProps = (state:any) => ({
    rooms: state.home.rooms,
    test: state.home.test,
});

const mapDispatchToProps = {
    increment,
};
  
export default connect(mapStateToProps, mapDispatchToProps)(PageViewer);