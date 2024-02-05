import { connect } from "react-redux";
import HomePage from "./HomePage";
import { addLobby, joinLobby } from "../../core/home/reducer";

const mapStateToProps = (state:any) => ({
    lobbies: state.home.lobbies,
});

const mapDispatchToProps = {
    addLobby,
    joinLobby
};
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);