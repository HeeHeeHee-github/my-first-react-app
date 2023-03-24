// 클래스형 컴포넌트
import { Component } from "react";

class BtnToNaver extends Component {
  render() {
    return (
      <button>
        <a href="http://naver.com" target="_blank">
          네이버로 이동
        </a>
      </button>
    );
  }
}

// 함수형 컴포넌트
// function BtnToNaver() {
//   return (
//     <button>
//       <a href="http://naver.com" target="_blank">
//         네이버로 이동
//       </a>
//     </button>
//   );
// }

export default BtnToNaver;
