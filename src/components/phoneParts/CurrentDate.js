import {useState, useEffect} from 'react';

const CurrentDate = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    // get date
    useEffect(() => {
        const formatTime = () => {
            const date = new Date();
            const options = { weekday: 'long', month: 'long', day: 'numeric'};
            const formattedDate = date.toLocaleDateString(undefined, options);
            setCurrentDate(formattedDate);
        };  
        formatTime();
  
        // Update the date every minute
        const interval = setInterval(formatTime, 60000);
        return () => clearInterval(interval);
    }, []);

    // get time
    useEffect(() => {
        const formatTime = () => {
        const date = new Date();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        // const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
        setCurrentTime(`${hours}:${minutes}`);
    };
  
        formatTime();
  
        // Update the time every minute
        const interval = setInterval(formatTime, 30000);
        return () => clearInterval(interval);
    }, []);

  
    return (
      <div className='dateTime'>
        <p className='date'>{currentDate}</p>
        <p className='time'>{currentTime}</p>
      </div>
    );
}

export default CurrentDate;