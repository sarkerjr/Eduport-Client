import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actions from "../../store/actions/index";

const Events = () => {
    const events = useSelector((state) => state.dashboard.events);
    const dispatch = useDispatch();

    const addEvents = useCallback(
        () => dispatch(actions.addEvents()),
        [dispatch]
    );

    useEffect(() => {
        addEvents();
    }, [addEvents]);

    //When there is no current/upcoming events
    let renderRoutine = events ? (
        <p classNameName="flex m-5 ml-0 text-green-900">No events found.</p>
    ) : null;

    if (events && events.length > 0) {
        renderRoutine = events.map((events, index) => {
            return (
                <li
                    class="mb-0.5 flex w-full flex-col bg-white p-2 text-black"
                    key={index}
                >
                    <p>
                        <b>{events.eventTitle}</b>
                    </p>
                    <p>{events.vanue}</p>
                    <div class="mt-1 flex flex-row">
                        <p class="flex w-1/2">{events.time}</p>
                        <p class="flex w-1/2">{events.date}</p>
                    </div>
                </li>
            );
        });
    }

    return (
        <div class="events shadow-md">
            <h3 class="mb-px flex bg-routine-title-bg p-2 text-white">
                Events
            </h3>
            <ul class="scroll flex w-full flex-col overflow-y-scroll text-white">
                {renderRoutine}
            </ul>
        </div>
    );
};

export default Events;
