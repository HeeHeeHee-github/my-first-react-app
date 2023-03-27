import React, { useState } from "react";

export default function StatePractice() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <span>{number}</span>
      <br />
      <button onClick={() => setNumber(number - 1)}>-</button>
      <button onClick={() => setNumber(number + 1)}>+</button>
    </div>
  );
}
