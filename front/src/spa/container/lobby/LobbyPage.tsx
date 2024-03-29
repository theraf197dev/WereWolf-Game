import { useEffect } from "react";
import Lobby from "../../../pages/room/Lobby";
import { getLobbyProps } from "./helpers";

const LobbyPage = (props: any) => {
  useEffect(() => {
    props.init({
      lobbyData: props.route.params.lobbyData,
    });
  }, []);

  return <Lobby {...getLobbyProps(props)} />;
};

export default LobbyPage;
