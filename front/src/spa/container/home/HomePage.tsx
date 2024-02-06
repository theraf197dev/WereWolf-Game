import { Socket, io } from "socket.io-client";
import {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../../../../typings";
import { DEV_SERVER } from "../../../../CONSTANTS";
import Home from "../../../pages/home/Home";
import { getHomeProps } from "./helpers";

const HomePage = (props: any) => {
  console.log(props);

  const socket: Socket<ServerToClientEvents, ClientToServerEvents> =
    io(DEV_SERVER);

  return <Home {...getHomeProps({ ...props, socket })} />;
};

export default HomePage;
