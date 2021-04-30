import Height from './components/Height'
import Weight from './components/Weight'
import Days from './components/Days'
import Reps from './components/Reps'
import Laps from './components/Laps'
import {state, reducer} from "./components/ApplicationState";
import React, {useReducer} from 'react';

function App() {

  const[currentState, dispatch] = useReducer(reducer, state);
  return (
    <div>
      <h1>Exercise Tracker</h1>
      <Height/>
      <Weight/>
      <Days state={currentState} dispatch={dispatch}/>
      <Reps state={currentState} dispatch={dispatch}/>
      <Laps/>
    </div>
  );
}

export default App;
