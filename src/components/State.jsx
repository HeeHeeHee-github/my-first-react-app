import React from "react";
import { useState } from "react";

let student = "조성희";

// function inEnglish() {
//   const spanEl = document.querySelector("#text");
//   spanEl.innerHTML = "CHO SUNGHEE";
// }

export default function State() {
  const [student, setStudent] = useState("조성희");
  return (
    <div>
      <button onClick={() => setStudent("CHO SUNGHEE")}>영어로</button>
      <br />
      <span id="text">{student}</span>
    </div>
  );
}
