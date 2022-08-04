import React from 'react'

import './Dashboard.css'

import Routine from './Routine'
import Calendar from './Calendar/Calendar'
import Events from './Events'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Routine className="routine"/>
            <Calendar className="calendar"/>
            <Events className="event"/>
        </div>
    )
}

export default Dashboard
