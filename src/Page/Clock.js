import React, { useState, useEffect } from 'react';
import '../Style/style.css';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const getFormattedDigits = (formattedTime) => {
        return formattedTime.split('').map((digit, index) => (
            <span key={index}>{digit}</span>
        ));
    };

    return (
        <div className="clock-container">
            <div className="clock-box">
                <h1 className="clock-text">{getFormattedDigits(formattedTime)}</h1>
            </div>
        </div>
    );
};

export default Clock;