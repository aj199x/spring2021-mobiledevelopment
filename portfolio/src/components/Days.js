import React, {useState} from 'react';

function Days () {
    //Default state of days is set to zero
    const [days, setDays] = useState(0);

    return (
        <div>
            {/*Days is defined based on the condition of the value*/}
            <h2>Daily Exercise Streak: {days}</h2>
            {/*Used to increase each day for the daily streak*/}
            <button onClick={() =>setDays(days + 1)}>+1 Day</button>
            {/*Button is used to reset Days if streak is broken*/}
            <button onClick={() =>setDays(0)}>Reset</button>
        </div>
    )
}

export default Days;