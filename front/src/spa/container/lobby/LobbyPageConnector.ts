import { connect } from "react-redux";
import LobbyPage from "./LobbyPage";
import { init, updateLobbyData } from "../../core/lobby/reducer";

const mapStateToProps = (state: any) => ({
  lobbyData: state.lobby.lobbyData,
});

const mapDispatchToProps = {
  init,
  updateLobbyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(LobbyPage);
