import { useEffect } from 'react';
import Lobby from '../../../pages/room/Lobby';
import { getLobbyProps } from "./helpers";

const LobbyPage = (props:any) => {
    console.log(props);

    useEffect(() => {
      props.init({
        lobbyData: props.route.params.lobbyData,
        socket: props.route.params.socket,
      });
    }, []);
    
    return (
        <Lobby {...getLobbyProps(props)} />
    )
}

export default LobbyPage;
