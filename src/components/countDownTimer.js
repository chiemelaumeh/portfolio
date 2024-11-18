import React, { useEffect } from 'react';

const CountdownTimer = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.logwork.com/widget/countdown.js";
        script.async = true;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <a
            href="https://logwork.com/countdown-h7jq"
            className="countdown-timer"
            data-timezone="America/Chicago"
            data-textcolor="3a6699"
            data-date="2024-12-14 18:00"
            data-background="#9edbff"
            data-digitscolor="#3a6699"
            data-unitscolor="#3a6699"
        >
            Chiemela's Graduation Party
        </a>
    );
};

export default CountdownTimer;