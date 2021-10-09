import React from 'react'
import Calendar_Img from '../../../assets/images/calendar.png'

import './Calendar.css'

const Calendar = () => {
    return (
        <div className="calendar-container card">
            <img className="calendar-img" src={Calendar_Img} alt="Calendar"/>
        </div>
    )
}

export default Calendar
