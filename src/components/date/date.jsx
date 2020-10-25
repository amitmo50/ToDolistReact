import React from 'react';
import './date.css';



const DateElemet = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();
    let fullDate = day + '/' + month + '/' + year;

    return (
        <div className="date-container">{fullDate}</div>
    );
}

export default DateElemet;