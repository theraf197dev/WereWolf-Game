import { connect } from "react-redux";
import LobbyPage from "./LobbyPage";

const mapStateToProps = (state:any) => ({
    lobbyData: state.lobby.lobbyData,
});

const mapDispatchToProps = {};
  
export default connect(mapStateToProps, mapDispatchToProps)(LobbyPage);