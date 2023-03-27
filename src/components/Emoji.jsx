import React, { useState } from "react";

export default function Emoji() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <button onClick={() => setNumber(number + 1)}>
        {number < 10 ? "👍🏻" : "😎"}
      </button>
      <br />
      <span>{number}</span>
    </div>
  );
}
