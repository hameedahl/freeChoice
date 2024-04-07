const Screen = ({changeScreen, activeScreen, currDate, currTime}) => {
    return (<div className="phoneScreen">
        {activeScreen}
    </div> );
}
 
export default Screen;