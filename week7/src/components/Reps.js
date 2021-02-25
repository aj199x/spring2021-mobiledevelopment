import React, {useState} from 'react';

function Reps () {
    const [reps, setReps] = useState(0);

    return (
        <div>
            <h2>Repititions: {reps}</h2>
            <button onClick={() =>setReps(reps + 1)}>+1 Rep</button>
            <button onClick={() =>setReps(0)}>Reset</button>
        </div>
    )
}

export default Reps;