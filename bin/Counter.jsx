import { useState } from "react";
import { FaTrash } from "react-icons/fa";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount(count + value);
  };

  return (
    <main>
      <div>
        <h2>{count}</h2>
        <button onClick={() => handleClick(1)}>Add</button>
        <button onClick={() => handleClick(-1)}>subtract</button>
      </div>
    </main>
  );
}
