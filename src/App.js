import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
//import { increment, decrement } from "./action/counter";

import * as actions from "./action/counter";

export default function App() {
  /*
  //Actions
  const increment = () => {
    return {
      type: "INCREMENT"
    };
  };

  // Reducers

  const counter = (state = 0, actions) => {
    switch (actions.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  // Store
  const store = createStore(counter);
  store.subscribe(() => console.log('Got response',store.getState()));
  
  // dispatch
  store.dispatch(increment());
  */
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux</h1>

      <p>Counter {counter}</p>
      {/* <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}

      <button onClick={() => dispatch(actions.increment())}>Increment</button>
      <button onClick={() => dispatch(actions.decrement())}>Decrement</button>
    </div>
  );
}
