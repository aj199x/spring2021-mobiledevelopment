let state = {
    days: 0,
    reps: 0
};

function reducer(state, action) {
    switch(action.type) {
        case "increment1":
            return {days: state.days + 1, reps: state.reps};
        case "increment2":
            return {days: state.days, reps: state.reps + 1};
        case "decrement1":
            return {days: state.days - 1, reps: state.reps};
        case "decrement2":
            return {days: state.days, reps: state.reps - 1};        
        default:
            throw new Error();
    }
}

export {state, reducer}