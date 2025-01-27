import { useState } from "react";

export default function Counter() {
  var [count, setCount] = useState(0);
  var [incrementBy, setIncrementBy] = useState(1);

  function Increment() {
    setCount(count + incrementBy);
  }
  function Decrement() {
    setCount(count - incrementBy);
  }

  function IncrementBy() {
    setIncrementBy(incrementBy + 1);
  }
  function DecrementBy() {
    setIncrementBy(incrementBy - 1);
  }

  return (
    <div>
      <h1>Counter Value is : {count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

      <h1>Increment Value is : {incrementBy}</h1>
      <button onClick={IncrementBy}>Increment</button>
      <button onClick={DecrementBy}>Decrement</button>
    </div>
  );
}
