import HomeButton from "./components/phoneParts/HomeButton";
import Screen from "./components/phoneParts/Screen";
import Top from "./components/phoneParts/Top";

const Phone = () => {
    return ( <div className="phone">
        <Top/>
        <Screen/>
        <HomeButton/>
    </div> );
}
 
export default Phone;