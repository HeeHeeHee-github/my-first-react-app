import React, { useState } from "react";

export default function StateProblem() {
  // const [state, setState] = useState([0]);
  const [state, setState] = useState({ student: "조성희" });
  console.log(state);
  return (
    <div>
      {state.student}
      <br />
      <button
        onClick={() => {
          state.student = "csh";
          const copyObj = { ...state };
          setState(copyObj);
          // state[0] = 1;
          // const copyArr = [...state];
          // setState(copyArr);
          console.log(state);
        }}
      >
        1로 만들기
      </button>
    </div>
  );
}

// 배열, 객체 둘 다 다뤄본 예제
// 주소값이 바뀌지 않기 때문에 원하는 대로 바뀌지 않음
// 그래서 배열, 객체를 복사한 새로운 copyArr or copyObj을 만들어줌
