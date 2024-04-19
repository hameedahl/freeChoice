import { useState } from "react";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoIosBatteryDead } from "react-icons/io";

const Battery = () => {
    const [showBattery, setShowBattery] = useState(true);
    const [flashing, setFlashing] = useState(null);


    setTimeout(() => {
        setFlashing("blink_me")
        setTimeout(() => {
            setShowBattery(false);
        }, 4000)
    }, 2000)

    return (
        <div className="battery screen" >
            {showBattery && <div className={`${flashing} battContent`}>
                <div className="batt">
                    <IoIosBatteryDead className="battIcon"/>
                    <div className="batteryColor"></div>
                </div>
                <BsFillLightningChargeFill className="chargeIcon"/>
            </div>}
        </div>
    );
}
 
export default Battery;