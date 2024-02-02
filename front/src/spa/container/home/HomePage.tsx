import Home from "../../../pages/home/Home";

const HomePage = (props:any) => {
    console.log(props)
    return (
        <Home route={props.route} navigation={props.navigation} rooms={props.rooms} increment={props.increment} />
    )
}

export default HomePage;
