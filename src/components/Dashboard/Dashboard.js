import React from 'react'

import './Dashboard.css'

import Routine from './Routine/Routine'
import Calendar from './Calendar/Calendar'
import UserInfo from './UserInfo/UserInfo'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Routine className="routine"/>
            <Calendar className="calendar"/>
            <UserInfo className="user-info"/>
        </div>
    )
}

export default Dashboard
