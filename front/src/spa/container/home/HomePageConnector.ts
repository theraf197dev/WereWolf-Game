import { connect } from "react-redux";
import HomePage from "./HomePage";
import { addLobby, findLobby } from "../../core/home/reducer";

const mapStateToProps = (state: any) => ({
  ...state.home,
});

const mapDispatchToProps = {
  addLobby,
  findLobby,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
