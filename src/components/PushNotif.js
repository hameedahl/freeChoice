
import React, { useState, useEffect } from 'react';

const PushNotifs = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className={`not ${isVisible ? 'show' : 'hide'}`}>
      <p>{message}</p>
    </div>
  );
};

export default PushNotifs;