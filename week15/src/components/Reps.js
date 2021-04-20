import React from 'react';

function Reps (props) {
     

    return (
        <div>
            <h2>Repititions: {props.state.reps}</h2>
            <button onClick={() =>props.dispatch({"type": "increment2"})}>+1 Rep</button>
            <button onClick={() =>props.dispatch({"type": "decrement2"})}>-1 Rep</button>
        </div>
    )
}

export default Reps;