import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions/index";

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

    //When there is no routine on today's date
    let renderRoutine = routine ? (
        <p className="flex m-5 ml-0 text-green-900">No Routine Found Today.</p>
    ) : null;

    if (routine && routine.length > 0) {
        renderRoutine = routine.map((routine, index) => {
            return (
                <li
                    className="mb-0.5 w-full flex flex-col bg-white p-2 text-black"
                    key={index}
                >
                    <p>
                        <b>{routine.course_assigned_to.course.courseName}</b>
                    </p>
                    <div className="mt-1 flex flex-row">
                        <div className="flex w-1/3">
                            <p>{` ${routine.time} ${routine.period} - ${routine.duration} hr`}</p>
                        </div>
                        <p className="flex ml-1 w-2/3 text-ellipsis">
                            {routine.course_assigned_to.faculty.name}
                        </p>
                    </div>
                </li>
            );
        });
    }

    return (
        <div className="scroll bg-routine-bg flex flex-col overflow-y-scroll shadow-md">
            <h3 className="mb-px flex p-2 bg-routine-title-bg text-white">
                Today's Routine
            </h3>
            <ul className="scroll flex flex-col w-full overflow-y-scroll text-white">
                {renderRoutine}
            </ul>
        </div>
    );
};

export default Routine;
