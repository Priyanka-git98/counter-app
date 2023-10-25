import React, { useReducer } from 'react';

// We define a counterReducer function, which is a pure function that takes the current state and an action, and returns the new state. It uses a switch statement to handle different action types
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
};

const Counter = () => {
  // In the Counter component, we use the useReducer hook to initialize the state. We pass the counterReducer function as the first argument and an initial state object ({ count: 0 }) as the second argument.
//   Inside the component, we render the current count value from the state (state.count) and provide three buttons to interact with the state.
//   When a button is clicked, it dispatches an action to the reducer. The dispatch function takes an action object with a type property that corresponds to one of the cases in the reducer.

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

export default Counter;
