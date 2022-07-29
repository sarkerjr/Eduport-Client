import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Routine.css";
import * as actions from "../../../store/actions/index";

const Routine = () => {
    const routine = useSelector((state) => state.dashboard.routine);
    const dispatch = useDispatch();

    const addRoutine = useCallback(
        () => dispatch(actions.addRoutine()),
        [dispatch]
    );

    useEffect(() => {
        addRoutine();
    }, [addRoutine]);

    //When there is no routine at today's date
    let renderRoutine = routine ? (
        <p className="flex m-5 ml-0 text-green-900">No Routine Found Today.</p>
    ) : null;

    if (routine && routine.length > 0) {
        renderRoutine = routine.map((routine, index) => {
            return (
                <li
                    className="mr-5 mb-1 flex flex-col rounded-sm bg-teal-400 p-2 duration-300 hover:scale-105"
                    key={index}
                >
                    <p>
                        <b>{routine.course_assigned_to.course.courseName}</b>
                    </p>
                    <div className="mt-1 flex flex-row">
                        <div className="flex w-1/5">
                            <p>{routine.time}</p>
                            <p>{routine.period}</p>
                        </div>
                        <p>/</p>
                        <div className="flex w-1/5">
                            <p>{routine.duration}</p>
                            <p>hr</p>
                        </div>
                        <p className="flex w-6/12">
                            {routine.course_assigned_to.faculty.name}
                        </p>
                    </div>
                </li>
            );
        });
    }

    return (
        <div className="scroll card m-1 flex flex-col overflow-y-scroll p-1">
            <h3 className="ml-5 flex text-xl font-bold">Today's Routine</h3>
            <ul className="scroll m-0 flex h-60 flex-col overflow-y-scroll pl-5 text-white">{renderRoutine}</ul>
        </div>
    );
};

export default Routine;
