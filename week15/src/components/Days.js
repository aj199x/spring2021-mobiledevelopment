import React from 'react';

function Days (props) {
    //Default state of days is set to zero
   

    return (
        <div>
            {/*Days is defined based on the condition of the value*/}
            <h2>Daily Exercise Streak: {props.state.days}</h2>
            {/*Used to increase each day for the daily streak*/}
            <button onClick={() => props.dispatch({"type": "increment1"})}>+1 Day</button>
            {/*Button is used to reset Days if streak is broken*/}
            <button onClick={() => props.dispatch({"type": "decrement1"})}>-1 Day</button>
        </div>
    )
}

export default Days;