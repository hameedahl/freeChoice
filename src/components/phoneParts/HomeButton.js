import HomeScreen from "../screens/HomeScreen";

const HomeButton = ({changeScreen, activateScreen}) => {

    return (<div className="homeButton border">
        <div className="button"></div>
        {/* <div className="button" 
        onClick={() => {changeScreen(<HomeScreen 
                            changeScreen={changeScreen} 
        activateScreen={activateScreen}/>)}}></div> */}
        </div> );
}
 
export default HomeButton;