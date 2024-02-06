import Lobby from '../../../pages/room/Lobby';
import { getLobbyProps } from "./helpers";

const LobbyPage = (props:any) => {
    console.log(props);
    
    return (
        <Lobby {...getLobbyProps(props)} />
    )
}

export default LobbyPage;
