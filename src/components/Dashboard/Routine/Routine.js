import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Routine.css";
import * as actions from "../../../store/actions/index";

const Routine = () => {
    const dispatch = useDispatch();

    const addRoutine = useCallback(
        () => dispatch(actions.addRoutine()),
        [dispatch]
    );
    useEffect(() => {
        addRoutine();
    }, [addRoutine]);

    const routine = useSelector((state) => state.dashboard.routine);

    //When there is no routine today
    let renderRoutine = routine ? <p className="no-routine">No Routine Found Today.</p> : null;

    if(routine && routine.length > 0){
        renderRoutine = routine.map((routine, index) => {
            return (
                <li className="routine_list__items" key={index}>
                    <p>
                        <b>{routine.course_assigned_to.course.courseName}</b>
                    </p>
                    <div className="routine_details">
                        <div className="routine_details__time">
                            <p>{routine.time}</p>
                            <p>{routine.period}</p>
                        </div>
                        <p>/</p>
                        <div className="routine_details__duration">
                            <p>{routine.duration}</p>
                            <p>hr</p>
                        </div>
                        <p className="routine_details__faculty">{routine.course_assigned_to.faculty.name}</p>
                    </div>
                </li>
            );
        });

        renderRoutine = <ul className="routine_list scroll">{renderRoutine}</ul>
    }

    return (
        <div className="routine-container scroll card">
            <h3 className="routine-heading">Today's Routine</h3>
            
                {renderRoutine}
            
        </div>
    );
};

export default Routine;
