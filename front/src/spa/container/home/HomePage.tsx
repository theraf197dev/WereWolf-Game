import Home from "../../../pages/home/Home";
import { getHomeProps } from "./helpers";

const HomePage = (props:any) => {
    console.log(props);
    
    return (
        <Home {...getHomeProps(props)} />
    )
}

export default HomePage;
