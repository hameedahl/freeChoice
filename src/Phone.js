import HomeButton from "./HomeButton";
import Screen from "./Screen";
import Top from "./Top";

const Phone = () => {
    return ( <div className="phone">
        <Top/>
        <Screen/>
        <HomeButton/>
    </div> );
}
 
export default Phone;