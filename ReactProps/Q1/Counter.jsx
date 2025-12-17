import { useState } from "react";

function Counter() {
  // useState hook to manage count
  const [count, setCount] = useState(0);

  // Function to increment count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
